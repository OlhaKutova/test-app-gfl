import types from "./types";

const API_URL = "http://www.omdbapi.com/?apikey=4ef0253f";

export const getMoviesList = ({ searchText = "", page = 1 }) => {
  return async (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.GET_MOVIES_LIST_START,
        });
        let optionsString = `&s=${searchText}&page=${page}`;

        const response = await fetch(`${API_URL}${optionsString}`);

        if (!response.ok) {
          throw new Error();
        }

        let { Search, totalResults } = await response.json();

        dispatch({
          type: types.GET_MOVIES_LIST_SUCCESS,
          payload: { searchText, results: Search, total: totalResults, page },
        });
        return resolve();
      } catch (err) {
        return reject();
      }
    });
  };
};

export const getStarterMovie = (searchText = "") => {
  return async (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        let optionsString = `&s=${searchText}`;

        const response = await fetch(`${API_URL}${optionsString}`);

        if (!response.ok) {
          throw new Error();
        }

        let { Search } = await response.json();

        dispatch({
          type: types.GET_STARTER_MOVIE_SUCCESS,
          payload: Search[0],
        });
        return resolve();
      } catch (err) {
        return reject();
      }
    });
  };
};

export const getMovieDetails = (id) => {
  return async (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.GET_MOVIE_DETAILS_START,
        });

        if (!id) throw new Error();

        let optionsString = `&i=${id}`;

        const response = await fetch(`${API_URL}${optionsString}`);

        if (!response.ok) {
          throw new Error();
        }

        let data = await response.json();

        dispatch({
          type: types.GET_MOVIE_DETAILS_SUCCESS,
          payload: data,
        });
        return resolve();
      } catch (err) {
        return reject();
      }
    });
  };
};

export const clearMoviesList = () => ({
  type: types.CLEAR_MOVIES_LIST,
});

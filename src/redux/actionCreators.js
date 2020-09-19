import types from "./types";

const API_URL = process.env.REACT_APP_API_URL;

export const getMoviesList = ({
  searchText,
  page = 1,
  isScrollType = false,
}) => {
  return async (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { loading, results } = getState((state) => state.movies);
        if ((loading && results.length > 0) || !searchText) return resolve();
        if (!isScrollType) {
          dispatch({
            type: types.GET_MOVIES_LIST_START,
          });
        } else {
          dispatch({
            type: types.SCROLL_GET_MOVIES_LIST_START,
          });
        }
        let optionsString = `&s=${searchText.trim()}&page=${page}`;

        const response = await fetch(`${API_URL}${optionsString}`);

        if (!response.ok) {
          throw new Error();
        }

        let { Search, totalResults } = await response.json();

        if (!isScrollType) {
          dispatch({
            type: types.GET_MOVIES_LIST_SUCCESS,
            payload: { searchText, results: Search, total: totalResults, page },
          });
        } else {
          dispatch({
            type: types.SCROLL_GET_MOVIES_LIST_SUCCESS,
            payload: { searchText, results: Search, total: totalResults, page },
          });
        }
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

import types from "../types";

const initialState = {
  starter: {
    loading: true,
    result: null,
  },
  movieDetails: {
    loading: true,
    result: null,
  },
  loading: true,
  searchText: "",
  results: [],
  total: null,
  page: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_MOVIES_LIST_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_MOVIES_LIST_SUCCESS:
      const { searchText, results, total, page } = payload;
      return {
        ...state,
        searchText,
        results,
        total,
        page,
        loading: false,
      };
    case types.CLEAR_MOVIES_LIST:
      return {
        ...state,
        results: [],
        total: null,
        loading: false,
        pagination: null,
      };

    case types.GET_STARTER_MOVIE_SUCCESS:
      return {
        ...state,
        starter: {
          ...state.starter,
          loading: false,
          result: payload,
        },
      };

    case types.GET_MOVIE_DETAILS_START:
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          loading: true,
          result: null,
        },
      };

    case types.GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          loading: false,
          result: payload,
        },
      };

    default:
      return state;
  }
};

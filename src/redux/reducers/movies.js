import types from "../types";

const initialState = {
  location: {
    history: [],
    currentKey: "",
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
    case "@@router/LOCATION_CHANGE": {
      let newHistory = [...state.location.history];
      const { location, action, isFirstRendering } = payload;
      if (action === "PUSH" || isFirstRendering) {
        if (state.location.currentKey) {
          const idx = newHistory.findIndex(
            (item) => item.key === state.location.currentKey
          );
          if (idx > -1) newHistory = newHistory.slice(0, idx + 1);
        } else {
          newHistory = newHistory.slice(0, 1);
        }
        newHistory.push(location);
      }
      return {
        ...state,
        location: {
          ...state.location,
          history: newHistory,
          currentKey: location.key,
        },
      };
    }

    case types.GET_MOVIES_LIST_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_MOVIES_LIST_SUCCESS: {
      const { searchText, results, total, page } = payload;
      return {
        ...state,
        searchText,
        results,
        total,
        page,
        loading: false,
      };
    }
    case types.SCROLL_GET_MOVIES_LIST_START:
      return {
        ...state,
        loading: true,
      };
    case types.SCROLL_GET_MOVIES_LIST_SUCCESS: {
      const { searchText, results, total, page } = payload;
      if (!(results && results.length)) return state;
      return {
        ...state,
        searchText,
        results: [...state.results, ...results],
        total,
        page,
        loading: false,
      };
    }
    case types.CLEAR_MOVIES_LIST: {
      return {
        ...state,
        results: [],
        total: null,
        loading: false,
        pagination: null,
      };
    }

    case types.GET_MOVIE_DETAILS_START: {
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          loading: true,
          result: null,
        },
      };
    }

    case types.GET_MOVIE_DETAILS_SUCCESS: {
      return {
        ...state,
        movieDetails: {
          ...state.movieDetails,
          loading: false,
          result: payload,
        },
      };
    }

    default:
      return state;
  }
};

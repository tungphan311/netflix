export const ADD_MOVIE = "movie/ADD_MOVIE";

export const ADD_TO_FAVORITE = "movie/ADD_TO_FAVORITE";
export const GET_RECOMMEND = "movie/GET_RECOMMEND";

export const GET_FAVORITES = "movie/GET_FAVORITES";
export const GET_FAVORITES_SUCCESS = "movie/GET_FAVORITES_SUCCESS";

export const MOVIE_DEFAULT = "movie/MOVIE_DEFAULT";

const initState = {
  movies: [],
  recommends: [],
  favorites: {
    hasMore: null,
    list: []
  }
};

export function movieReducer(state = initState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case ADD_MOVIE: {
      const { response } = action;

      for (let movie of response) {
        const mov = newState.movies.find(m => m.id === movie.id);

        if (!mov) {
          newState.movies = [...newState.movies, movie];
        }
      }

      return newState;
    }

    case ADD_TO_FAVORITE: {
      const { id } = action;

      const index = newState.movies.findIndex(m => m.id === id);
      newState.movies[index].is_favorite = !newState.movies[index].is_favorite;

      let newList = [...newState.favorites.list];
      const i = newList.findIndex(m => m.id === id);

      if (i > -1) {
        newList = newList.filter(m => m.id !== id);
      }
      newState.favorites.list = newList;

      return newState;
    }

    case GET_RECOMMEND: {
      const { response } = action;

      newState.recommends = response;

      return newState;
    }

    case GET_FAVORITES_SUCCESS: {
      const { response } = action;

      newState.favorites = response;

      return newState;
    }

    case MOVIE_DEFAULT: {
      newState.recommends = [];
      newState.favorites = { hasMore: null, list: [] };

      return newState;
    }

    default:
      return newState;
  }
}

export const ADD_MOVIE = "movie/ADD_MOVIE";

export const ADD_TO_FAVORITE = "movie/ADD_TO_FAVORITE";
export const GET_RECOMMEND = "movie/GET_RECOMMEND";

const initState = {
  movies: [],
  recommends: []
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

      return newState;
    }

    case GET_RECOMMEND: {
      const { response } = action;

      newState.recommends = response;

      return newState;
    }

    default:
      return newState;
  }
}

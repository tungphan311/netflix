export const ADD_MOVIE = "movie/ADD_MOVIE";

const initState = {
  movies: []
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

    default:
      return newState;
  }
}

export const ADD_RESULT = "search/ADD_RESULT";

const initState = {
  movies: {},
  celebs: {}
};

export function searchReducer(state = initState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case ADD_RESULT: {
      const { label, title, celebs, requestType } = action;

      if (requestType === "All") {
        newState.movies[label] = title;
        newState.celebs[label] = celebs;
      } else if (requestType === "Title") {
        newState.movies[label] = title;
      } else if (requestType === "Celebs") {
        newState.celebs[label] = celebs;
      }

      return newState;
    }

    default:
      return newState;
  }
}

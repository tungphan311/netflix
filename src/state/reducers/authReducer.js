export const LOGIN = "auth/LOGIN";
export const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";

const initState = {
  token: null
};

export function authReducer(state = initState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case LOGIN_SUCCESS: {
      //   const { token } = action.payload;

      //   const decoded = jwt_decode(token);
      //   newState.identity = decoded;

      //   newState.token = token;
      return newState;
    }

    // case LOGOUT_SUCCESS:
    default:
      return newState;
  }
}

import jwt_decode from "jwt-decode";

export const LOGIN = "auth/LOGIN";
export const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";

export const REGISTER = "auth/REGISTER";
export const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";

const initState = {
  token: null,
  identity: {}
};

export function authReducer(state = initState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case LOGIN_SUCCESS: {
      const { token } = action;

      localStorage.setItem("token", token);

      const decoded = jwt_decode(token);
      const { identity } = decoded;
      const decodeIdentity = JSON.parse(identity);

      newState.token = token;
      newState.identity = decodeIdentity;
      return newState;
    }

    case REGISTER_SUCCESS:
      const { token } = action;

      localStorage.setItem("token", token);

      const decoded = jwt_decode(token);
      const { identity } = decoded;
      const decodeIdentity = JSON.parse(identity);

      newState.token = token;
      newState.identity = decodeIdentity;
      return newState;

    // case LOGOUT_SUCCESS:
    default:
      return newState;
  }
}

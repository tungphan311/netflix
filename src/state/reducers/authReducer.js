import jwt_decode from "jwt-decode";

export const LOGIN = "auth/LOGIN";
export const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";

export const REGISTER = "auth/REGISTER";
export const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";

export const CHECK_TOKEN = "auth/CHECK_TOKEN";
export const CHECK_TOKEN_SUCCESS = "auth/CHECK_TOKEN_SUCCESS";
export const CHECK_TOKEN_FAIL = "auth/CHECK_TOKEN_FAIL";

export const REFRESH_TOKEN = "auth/REFRESH_TOKEN";
export const REFRESH_TOKEN_SUCCESS = "auth/REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_FAIL = "auth/REFRESH_TOKEN_FAIL";

const initState = {
  token: null,
  refreshToken: null,
  identity: {}
};

export function authReducer(state = initState, action = {}) {
  const newState = { ...state };

  switch (action.type) {
    case LOGIN_SUCCESS: {
      const { token, refreshToken } = action;

      localStorage.setItem("authen", token);
      localStorage.setItem("refresh", refreshToken);

      const decoded = jwt_decode(token);
      const { identity } = decoded;
      const decodeIdentity = JSON.parse(identity);

      newState.token = token;
      newState.refreshToken = refreshToken;
      newState.identity = decodeIdentity;
      return newState;
    }

    case REGISTER_SUCCESS:
      const { token, refreshToken } = action;

      localStorage.setItem("authen", token);
      localStorage.setItem("refresh", refreshToken);

      const decoded = jwt_decode(token);
      const { identity } = decoded;
      const decodeIdentity = JSON.parse(identity);

      newState.token = token;
      newState.identity = decodeIdentity;
      return newState;

    case CHECK_TOKEN_SUCCESS:
    case REFRESH_TOKEN_SUCCESS: {
      const { token } = action;
      localStorage.setItem("authen", token);

      const decoded = jwt_decode(token);
      const { identity } = decoded;
      const decodeIdentity = JSON.parse(identity);

      newState.token = token;
      newState.identity = decodeIdentity;

      return newState;
    }

    // case LOGOUT_SUCCESS:
    case CHECK_TOKEN_FAIL: {
      localStorage.removeItem("authen");
      return newState;
    }

    case REFRESH_TOKEN_FAIL: {
      localStorage.removeItem("refresh");
      return newState;
    }

    default:
      return newState;
  }
}

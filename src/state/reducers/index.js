import { combineReducers } from "redux";
import { formReducer } from "./formReducer";
import { authReducer } from "./authReducer";
import { loadingReducer } from "./loadingReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  loading: loadingReducer
});

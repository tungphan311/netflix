import { combineReducers } from "redux";
import { formReducer } from "./formReducer";
import { authReducer } from "./authReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer
});

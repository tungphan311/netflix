import { takeEvery, put, call, select } from "redux-saga/effects";
import { getFormValues } from "redux-form";
import { LOGIN, LOGIN_SUCCESS } from "../reducers/authReducer";
import { login } from "../../services/authServices";
import { FORM_KEY_LOGIN } from "../reducers/formReducer";

export function* loginSaga() {
  try {
    // yield put({ type: SET_LOADING });
    const { username, password } = yield select(state =>
      getFormValues(FORM_KEY_LOGIN)(state)
    );

    const result = yield call(login, { username, password });
    const response = result.data;

    yield put({ type: LOGIN_SUCCESS, payload: response });

    // yield toast({ message: "Đăng nhập thành công" });
  } catch (err) {
    // yield toastErr(err);
    console.log(err);
  } finally {
    // yield put({ type: SET_LOADING, status: false });
  }
}

export default function* authSaga() {
  yield takeEvery(LOGIN, loginSaga);
}

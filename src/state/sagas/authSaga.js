import { takeEvery, put, call, select } from "redux-saga/effects";
import { getFormValues } from "redux-form";
import {
  LOGIN,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_SUCCESS,
  CHECK_TOKEN,
  CHECK_TOKEN_SUCCESS,
  CHECK_TOKEN_FAIL
} from "../reducers/authReducer";
import { login, register, checkToken } from "../../services/authServices";
import { FORM_KEY_LOGIN, FORM_KEY_REGISTER } from "../reducers/formReducer";
import { toastErr, toast } from "../../utils/toast";
import history from "../../state/history";

export function* loginSaga() {
  try {
    // yield put({ type: SET_LOADING });
    const { email, password } = yield select(state =>
      getFormValues(FORM_KEY_LOGIN)(state)
    );

    const result = yield call(login, { email, password });
    const response = result.data;

    const token = response.data;

    yield put({ type: LOGIN_SUCCESS, token });

    yield toast({ message: response.msg });

    yield history.push("/");
  } catch (err) {
    yield toastErr(err);
  } finally {
    // yield put({ type: SET_LOADING, status: false });
  }
}

export function* registerSaga() {
  try {
    // yield put({ type: SET_LOADING });
    const { email, password } = yield select(state =>
      getFormValues(FORM_KEY_REGISTER)(state)
    );

    const result = yield call(register, { email, password });
    const response = result.data;

    const token = response.data;

    yield put({ type: REGISTER_SUCCESS, token });

    yield toast({ message: response.msg });

    yield history.push("/");
  } catch (err) {
    yield toastErr(err);
  } finally {
    // yield put({ type: SET_LOADING, status: false });
  }
}

export function* checkTokenSaga({ token }) {
  try {
    // yield put({ type: SET_LOADING });
    yield call(checkToken, { token });

    yield put({ type: CHECK_TOKEN_SUCCESS, token });
  } catch (err) {
    yield toastErr(err);
    const {
      response: { status }
    } = err;

    if (status === 401) {
      yield put({ type: CHECK_TOKEN_FAIL });
      history.push("/login");
    }
  } finally {
    // yield put({ type: SET_LOADING, status: false });
  }
}

export default function* authSaga() {
  yield takeEvery(LOGIN, loginSaga);
  yield takeEvery(REGISTER, registerSaga);
  yield takeEvery(CHECK_TOKEN, checkTokenSaga);
}
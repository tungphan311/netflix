import React from "react";
import { Field, reduxForm } from "redux-form";
import { FORM_KEY_LOGIN } from "../../state/reducers/formReducer";
import Input from "../Input/Input";
import "./LoginForm.scss";
import { require, email, password } from "../../utils/formValidate";
import PasswordInput from "../Input/PasswordInput";

function LoginForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="login--wrapper">
        <h1>Đăng nhập </h1>
        <Field
          name="username"
          placeholder="Email..."
          component={Input}
          validate={[require, email]}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mật khẩu..."
          component={PasswordInput}
          validate={[require, password]}
        />
        <button type="submit" className="btn-primary">
          Đăng nhập
        </button>
        <div className="space-between m__t--6 font__size--x-small">
          <div>
            <input type="checkbox" id="remember" defaultChecked />
            <label htmlFor="remember" className="m__l--5">
              Ghi nhớ tôi
            </label>
          </div>
          <div>Quên mật khẩu?</div>
        </div>
        <div className="register">
          Bạn mới tham gia?{" "}
          <span className="registerLink">
            <a href="/register">Đăng ký ngay</a>
          </span>
        </div>
      </div>
    </form>
  );
}

export default reduxForm({
  form: FORM_KEY_LOGIN,
  touchOnBlur: false
})(LoginForm);

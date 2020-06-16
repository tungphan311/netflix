import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import Input from "../../Input/Input";
import PasswordInput from "../../Input/PasswordInput";
import {
  email,
  password,
  require,
  matchPassword
} from "../../../utils/formValidate";
import { FORM_KEY_REGISTER } from "../../../state/reducers/formReducer";

function RegiterForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="login--wrapper">
        <h1>Đăng ký </h1>
        <Field
          name="email"
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
        <Field
          name="repassword"
          type="password"
          placeholder="Nhập lại mật khẩu..."
          component={PasswordInput}
          validate={[require, password, matchPassword]}
        />
        <button type="submit" className="btn-primary">
          Đăng ký
        </button>

        <div className="register">
          Đã có tài khoản?{" "}
          <span className="registerLink">
            <Link to="/login">Đăng nhập ngay</Link>
          </span>
        </div>
      </div>
    </form>
  );
}

export default reduxForm({
  form: FORM_KEY_REGISTER,
  touchOnBlur: false
})(RegiterForm);

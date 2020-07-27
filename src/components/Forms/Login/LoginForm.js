import React from "react";
import { Field, reduxForm, isDirty } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FORM_KEY_LOGIN } from "../../../state/reducers/formReducer";
import Input from "../../Input/Input";
import "./LoginForm.scss";
import { require, email, password } from "../../../utils/formValidate";
import PasswordInput from "../../Input/PasswordInput";

function LoginForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="login--wrapper">
        <h1>Welcome back! </h1>
        <Field
          name="email"
          placeholder="Email..."
          component={Input}
          validate={[require, email]}
        />
        <Field
          name="password"
          type="password"
          placeholder="Password ..."
          component={PasswordInput}
          validate={[require, password]}
        />
        <button type="submit" className="btn-primary">
          Sign in
        </button>
        <div className="space-between m__t--6 font__size--x-small">
          <div>
            <input type="checkbox" id="remember" defaultChecked />
            <label htmlFor="remember" className="m__l--5">
              Remember me
            </label>
          </div>
          <div>Forgot password?</div>
        </div>
        <div className="register">
          New to Netflix?{" "}
          <span className="registerLink">
            <Link to="/register">Sig up now</Link>
          </span>
        </div>
      </div>
    </form>
  );
}

LoginForm = reduxForm({
  form: FORM_KEY_LOGIN,
  touchOnBlur: false
})(LoginForm);

LoginForm = connect(state => ({
  shouldError: () => isDirty(FORM_KEY_LOGIN)(state)
}))(LoginForm);

export default LoginForm;

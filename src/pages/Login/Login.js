import React from "react";
import "./Login.scss";
import LoginForm from "../../components/Forms/LoginForm";

function Login(props) {
  const handleSubmit = event => {};

  return (
    <div className="Login">
      <div className="form__overlay" />
      <div className="form__container">
        <div className="Background" />
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default Login;

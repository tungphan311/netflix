import React from "react";
import "./Login.scss";
import { useDispatch } from "react-redux";
import LoginForm from "../../components/Forms/Login/LoginForm";
import { LOGIN } from "../../state/reducers/authReducer";

function Login() {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch({ type: LOGIN });
  };

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

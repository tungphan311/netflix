import React from "react";
import { useDispatch } from "react-redux";
import RegiterForm from "../../components/Forms/Register/RegiterForm";
import { REGISTER } from "../../state/reducers/authReducer";

function Register() {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch({ type: REGISTER });
  };

  return (
    <div className="Login">
      <div className="form__overlay" />
      <div className="form__container">
        <div className="Background" />
        <RegiterForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default Register;

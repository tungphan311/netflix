import React from "react";
import "./Input.scss";

const Input = ({
  placeholder = "",
  className = "",
  label = "",
  type = "text",
  meta = {}, // redux form
  input // redux form
}) => {
  const { touched, error } = meta;

  const showError = touched && error;
  const { errCode } = error || {};

  return (
    <div className="input__container">
      <label className={`${!label ? "d-none" : "input__label"}`}>{label}</label>
      <div style={{ position: "relative" }}>
        <input
          {...input}
          placeholder={placeholder}
          className={`input__field ${className}`}
          type={type}
        />
        {showError && <div className="error-line"></div>}
      </div>
      {showError && <span className="error">{errCode}</span>}
    </div>
  );
};

export default Input;

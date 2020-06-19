import React from "react";
import "./ReviewInput.scss";

function ReviewInput({
  children,
  placeholder = "",
  className = "",
  type = "text",
  meta = {}, // redux form
  input // redux form
}) {
  const { touched, error } = meta;

  const showError = touched && error;
  const { errCode } = error || {};

  return (
    <div className="review-input">
      <div style={{ position: "relative" }} className="align-center">
        <input
          {...input}
          placeholder={placeholder}
          className={`review--input ${className}`}
          type={type}
        />
        {children}
      </div>
      {showError && <span className="error">{errCode}</span>}
    </div>
  );
}

export default ReviewInput;

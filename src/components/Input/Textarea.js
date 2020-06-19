import React from "react";
import "./ReviewInput.scss";

function Textarea({
  rows = 1,
  placeholder = "",
  className = "",
  meta = {}, // redux form
  input // redux form
}) {
  const { touched, error } = meta;

  const showError = touched && error;
  const { errCode } = error || {};

  return (
    <div className="textarea__wrapper">
      <textarea
        {...input}
        rows={rows}
        placeholder={placeholder}
        className={`review--input ${className}`}
      />
      {showError && <span className="error">{errCode}</span>}
    </div>
  );
}

export default Textarea;

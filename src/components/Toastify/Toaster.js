import React from "react";
import "./Toastify.scss";

const Toaster = ({ type, message }) => (
  <div className={`nf__toast nf__toast--${type}`}>
    <div className={`icon icon--${type}`} />
    <div className="nf__toast--message">
      <span>{message}</span>
    </div>
  </div>
);

export default Toaster;

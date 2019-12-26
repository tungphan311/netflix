import React from "react";
import "./Panel.scss";

function Panel() {
  return (
    <div className="panel__container">
      <div className="panel__motion">
        <div className="background-wrapper">
          <img
            className="image-layer"
            src="/assets/home.png"
            alt="background"
          />
          <div className="info-layer"></div>
          <div className="bottom-layer"></div>
        </div>
        <div className="embedded-component"></div>
      </div>
      <div className="fill__container"></div>
    </div>
  );
}

export default Panel;

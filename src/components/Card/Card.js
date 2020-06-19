import React from "react";
import "./Card.scss";

function Card({ children, title }) {
  return (
    <div className="card__container">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Card;

import React from "react";
import "./Card.scss";

const RATIO = 341 / 192;

function Card({ image, width }) {
  const height =
    width > 950
      ? (width - 60) / (RATIO * 4)
      : width > 420
      ? (width - 45) / (RATIO * 3)
      : (width - 30) / (RATIO * 2);
  return <div className="card__container" style={{ ...image, height }}></div>;
}

export default Card;

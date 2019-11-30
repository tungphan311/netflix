import React from "react";
import "./Card.scss";

const RATIO = 341 / 192;

function Card({ image, width }) {
  const height =
    width > 950
      ? (width - 64) / (RATIO * 4)
      : width > 420
      ? (width - 48) / (RATIO * 3)
      : (width - 32) / (RATIO * 2);
  return (
    <div className="card__container p__hor--8" style={{ height }}>
      <div
        style={{ ...image, backgroundSize: "cover" }}
        className="w--100 h--100"
      ></div>
    </div>
  );
}

export default Card;

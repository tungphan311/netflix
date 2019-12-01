import React from "react";
import "./Card.scss";

const RATIO = 341 / 192;

function Card({ image, containerwidth, screenWidth }) {
  const height =
    screenWidth > 950
      ? (containerwidth - 64) / (RATIO * 4)
      : screenWidth > 420
      ? (containerwidth - 48) / (RATIO * 3)
      : (containerwidth - 32) / (RATIO * 2);
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

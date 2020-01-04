import React from "react";

export const Play = (
  <use filter="" xlinkHref="#play-with-ring">
    <svg id="play-with-ring" viewBox="0 0 28 28">
      {" "}
      <g fill="none" fillRule="evenodd">
        <circle
          stroke="#FFF"
          className="ring"
          fill="#000"
          fillOpacity="0.5"
          strokeWidth="1"
          cx="14"
          cy="14"
          r="13"
        ></circle>
        <polygon
          fill="currentColor"
          className="arrow"
          points="10 20 10 8 20 14"
        ></polygon>
      </g>
    </svg>
  </use>
);

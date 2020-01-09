import React from "react";

function DetailMenu({ selected, handleSelect, season }) {
  const className = id => (id === selected ? "current" : "");

  return (
    <ul className="menu">
      <li
        className={`Overview ${className("Overview")}`}
        id="Overview"
        onClick={() => handleSelect("Overview")}
      >
        <a role="link" tabIndex="0">
          OVERVIEW
        </a>
        <span></span>
      </li>
      {season && (
        <li
          className={`Episodes ${className("Episodes")}`}
          id="Episodes"
          onClick={() => handleSelect("Episodes")}
        >
          <a role="link" tabIndex="0">
            EPISODES
          </a>
          <span></span>
        </li>
      )}
      <li
        className={`ShowDetails ${className("ShowDetails")}`}
        id="ShowDetails"
        onClick={() => handleSelect("ShowDetails")}
      >
        <a role="link" tabIndex="0">
          DETAILS
        </a>
        <span></span>
      </li>
    </ul>
  );
}

export default DetailMenu;

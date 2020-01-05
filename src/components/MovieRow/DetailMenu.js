import React from "react";

function DetailMenu({ selected, handleSelect }) {
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
      <li
        className={`MoreLikeThis ${className("MoreLikeThis")}`}
        id="MoreLikeThis"
        onClick={() => handleSelect("MoreLikeThis")}
      >
        <a role="link" tabIndex="0">
          MORE LIKE THIS
        </a>
        <span></span>
      </li>
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

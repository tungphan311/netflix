/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./NavBar.scss";
import NavigatorItem from "./NavigatorItem/NavigatorItem";

function NavBar() {
  return (
    <div className="navbar__container">
      <a aria-label="Netflix" className="navbar_logo" href="/" />
      <ul className="navbar__navigator">
        {NAV_ITEMS.map(item => (
          <NavigatorItem title={item} />
        ))}
      </ul>
    </div>
  );
}

export default NavBar;

const NAV_ITEMS = ["Home", "TV Shows", "Movies", "My favorites", "Filter"];

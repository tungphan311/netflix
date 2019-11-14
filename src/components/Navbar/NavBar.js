/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./NavBar.scss";
import NavigatorItem from "./NavigatorItem/NavigatorItem";

function NavBar({ route }) {
  return (
    <div className="navbar__container">
      <a aria-label="Netflix" className="navbar_logo" href="/" />
      <ul className="navbar__navigator">
        {NAV_ITEMS.map(({ title, href }) => (
          <NavigatorItem
            key={title}
            title={title}
            href={href}
            isActive={route === href}
          />
        ))}
      </ul>
    </div>
  );
}

export default NavBar;

const NAV_ITEMS = [
  { title: "Home", href: "/" },
  { title: "TV Shows", href: "#" },
  { title: "Movies", href: "#" },
  { title: "My favorites", href: "#" }
];

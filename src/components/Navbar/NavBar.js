/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import "./NavBar.scss";
import OutsideClickWrapper from "../OutsideClickWrapper/OutsideClickWrapper";
import NavigatorItem from "./NavigatorItem/NavigatorItem";

function NavBar({ route }) {
  const [show, setShow] = useState(false);
  const display = show ? "navbar__sub-navigator__show" : "d-none";
  return (
    <div className="navbar__container">
      <a aria-label="Netflix" className="navbar_logo" href="/" />
      <ul className="navbar__navigator">
        <li className="navbar__navigator__selector">
          <OutsideClickWrapper
            onClickOutside={() => setShow(false)}
            isShowing={show}
          >
            <a
              className="menu-trigger"
              role="button"
              tabIndex="0"
              onClick={() => setShow(!show)}
            >
              Browser
            </a>

            <div className={`navbar__sub-navigator ${display}`}>
              <div className="callout-arrow"></div>
              <div className="topbar"></div>
              <ul className="navbar__sub-navigator__menu">
                {NAV_ITEMS.map(({ title, href }) => (
                  <NavigatorItem
                    subItem
                    key={title}
                    title={title}
                    href={href}
                    isActive={route === href}
                  />
                ))}
              </ul>
            </div>
          </OutsideClickWrapper>
        </li>
        {NAV_ITEMS.map(({ title, href }) => (
          <NavigatorItem
            subItem={false}
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

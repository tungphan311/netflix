import React from "react";
import "./NavBar.scss";
import { NAV_ITEMS } from "../../constants";
import NavigatorItem from "./NavigatorItem/NavigatorItem";
import NavigatorSelect from "./NavigatorSelect/NavigatorSelect";

function NavBar({ route }) {
  return (
    <div className="navbar__container">
      <a aria-label="Netflix" className="navbar_logo" href="/" />
      <ul className="navbar__navigator">
        <NavigatorSelect route={route} title="Browser" />
        {NAV_ITEMS.map(({ title, href }) => (
          <NavigatorItem
            subItem={false}
            key={title}
            title={title}
            href={href}
            isActive={route === href}
          />
        ))}
        <NavigatorSelect route={route} title="Filter" />
      </ul>
    </div>
  );
}

export default NavBar;

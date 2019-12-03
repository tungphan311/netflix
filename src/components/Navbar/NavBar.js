import React from "react";
import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { NAV_ITEMS } from "../../constants";
import NavigatorItem from "./NavigatorItem/NavigatorItem";
import NavigatorSelect from "./NavigatorSelect/NavigatorSelect";
import Search from "./Search/Search";

function NavBar({ history }) {
  const route = history.location.pathname;
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
        <NavigatorSelect route={route} title="Filter" history={history} />
      </ul>
      <div className="navbar__right">
        <Search />
        <button className="notification__button">
          <FontAwesomeIcon icon={faBell} color="#fff" size="lg" />
        </button>
        <button className="user__button">
          <FontAwesomeIcon icon={faUser} color="#fff" size="lg" />
        </button>
        <button className="down__button">
          <FontAwesomeIcon icon={faChevronDown} color="#fff" size="lg" />
        </button>
      </div>
    </div>
  );
}

export default NavBar;

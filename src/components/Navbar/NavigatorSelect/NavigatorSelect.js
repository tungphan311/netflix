import React, { useState } from "react";
import NavigatorItem from "../NavigatorItem/NavigatorItem";
import OutsideClickWrapper from "../../OutsideClickWrapper/OutsideClickWrapper";
import { NAV_ITEMS, FILTER_LIST } from "../../../constants";
import "./NavigatorSelect.scss";

function NavigatorSelect({ route, title, history }) {
  const [show, setShow] = useState(false);
  const display = show ? "navbar__sub-navigator__show" : "d-none";

  return (
    <li
      className={`navbar__navigator__selector navbar__navigator__selector--${title}`}
    >
      <OutsideClickWrapper
        onClickOutside={() => setShow(false)}
        isShowing={show}
      >
        <a
          className={`menu-trigger menu-trigger--${title} no-select`}
          role="button"
          tabIndex="0"
          onClick={() => setShow(!show)}
        >
          {title}
        </a>

        <div
          className={`navbar__sub-navigator navbar__sub-navigator--${title} ${display}`}
        >
          <div className="callout-arrow"></div>
          <div className="topbar"></div>
          <ul className="navbar__sub-navigator__menu">
            {title === "Browser"
              ? NAV_ITEMS.map(({ title, href }) => (
                  <NavigatorItem
                    subItem
                    key={title}
                    title={title}
                    href={href}
                    isActive={route === href}
                  />
                ))
              : FILTER_LIST.map(({ title, sub }) => (
                  <NavigatorItem
                    subItem
                    key={title}
                    title={title}
                    sub={sub}
                    history={history}
                    toggle={setShow}
                  />
                ))}
          </ul>
        </div>
      </OutsideClickWrapper>
    </li>
  );
}

export default NavigatorSelect;

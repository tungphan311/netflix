import React from "react";
import "./NavigatorItem.scss";

function NavigatorItem({ title, isActive, href, subItem }) {
  const liClassName = subItem
    ? "navbar__sub-navigator__item"
    : "navbar__navigator__item";

  let aClassName = subItem ? "sub-menu__item" : "menu__item";
  aClassName = isActive ? `${aClassName} active` : aClassName;

  return (
    <li className={liClassName}>
      <a className={aClassName} href={href}>
        {title}
      </a>
    </li>
  );
}

export default NavigatorItem;

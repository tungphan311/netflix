import React from "react";
import "./NavigatorItem.scss";

function NavigatorItem({ title, isActive, href }) {
  const className = isActive ? "active" : "";

  return (
    <li className="navbar__navigator__item">
      <a className={className} href={href}>
        {title}
      </a>
    </li>
  );
}

export default NavigatorItem;

import React, { useState } from "react";
import "./NavigatorItem.scss";

const divideArray = array => {
  let subArray = [];
  let newArray = [];

  array.map((value, index) => {
    subArray = [...subArray, value];
    if (index % 4 === 3 || index === array.length - 1) {
      newArray = [...newArray, subArray];
      subArray = [];
    }
  });

  return newArray;
};

function NavigatorItem({ title, isActive, href, subItem, sub }) {
  const [show, toggleShow] = useState(false);

  const newSub = sub && divideArray(sub);

  const liClassName = subItem
    ? "navbar__sub-navigator__item"
    : "navbar__navigator__item";

  let aClassName = subItem ? "sub-menu__item" : "menu__item";
  aClassName = isActive ? `${aClassName} active` : aClassName;

  return (
    <li
      className={liClassName}
      onMouseEnter={() => subItem && toggleShow(true)}
      onMouseLeave={() => subItem && toggleShow(false)}
    >
      <a className={aClassName} href={href}>
        {title}
      </a>
      {show && (
        <div className="filter__item__sub">
          {newSub.map(item => (
            <div className="sub-item__column">
              {item.map(sub => (
                <div
                  className="text--white m__ver--7 no-wrap line__height--16 no-select"
                  onClick={}
                >
                  {sub}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </li>
  );
}

export default NavigatorItem;

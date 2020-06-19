import React, { useState } from "react";
import "./NavigatorItem.scss";
import { Link } from "react-router-dom";

const divideArray = array => {
  let subArray = [];
  let newArray = [];

  // eslint-disable-next-line array-callback-return
  array.map((value, index) => {
    subArray = [...subArray, value];
    if (index % 4 === 3 || index === array.length - 1) {
      newArray = [...newArray, subArray];
      subArray = [];
    }
  });

  return newArray;
};

function NavigatorItem({
  title,
  isActive,
  href,
  subItem,
  sub,
  history,
  toggle
}) {
  const [show, toggleShow] = useState(false);

  const newSub = sub && divideArray(sub);

  const liClassName = subItem
    ? "navbar__sub-navigator__item"
    : "navbar__navigator__item";

  let aClassName = subItem ? "sub-menu__item" : "menu__item";
  aClassName = isActive ? `${aClassName} active` : aClassName;

  const onSubItemClick = sub => {
    history.push(`/browse?${title.toLowerCase()}=${sub.toLowerCase()}`);
    toggleShow(false);
    toggle(false);
  };

  return (
    <li
      className={liClassName}
      onMouseEnter={() => subItem && toggleShow(true)}
      onMouseLeave={() => subItem && toggleShow(false)}
    >
      <Link className={aClassName} to={href}>
        {title}
      </Link>
      {show && (
        <div className="filter__item__sub">
          {newSub &&
            newSub.map(item => (
              <div key={item[0]} className="sub-item__column">
                {item.map(sub => (
                  <div
                    key={sub}
                    className="text--white m__ver--7 no-wrap line__height--16 no-select"
                    onClick={() => onSubItemClick(sub)}
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

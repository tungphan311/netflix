import React from "react";
import "./FilterItem.scss";
const FilterItem = props => {
  const { filterName } = props;
  return (
    <div className="filteritem__container">
      <div className="filteritem__name">{filterName}</div>
      <div className="filteritem__checkbox">
        <input type="checkbox" />
      </div>
    </div>
  );
};
export default FilterItem;

import React from "react";
import "./FilterItem.scss";
const FilterItem = props => {
  const { filterName } = props;
  return (
    <div className="filteritem__container">
      <div className="filteritem__name">{filterName}</div>
      <div className="filteritem__checkbox">
        <input
          type="checkbox"
          style={{ width: "16px", margin: 0, height: "16px" }}
        />
      </div>
    </div>
  );
};
export default FilterItem;

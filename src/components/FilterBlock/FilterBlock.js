import React from "react";
import { FILTER_LIST } from "../../constants/FilterList";
import Filter from "./Filter/Filter";
import "./FilterBlock.scss";

const FilterBlock = () => (
  <div className="filterblock__container">
    <div className="m__l--20 m__b--30 uppercase">Filter by</div>
    <div className="filterblock__line" />

    {FILTER_LIST.map(({ title, sub }) => (
      <>
        <Filter title={title} itemList={sub} />
        <div className="filterblock__line" />
      </>
    ))}
  </div>
);

export default FilterBlock;

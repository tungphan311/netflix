import React from "react";
import Filter from "./Filter/Filter";
import "./FilterBlock.scss";
const FilterBlock = () => (
  <div className="filterblock__container">
    <div className="filterblock__header">Filter by</div>
    <div className="filterblock__line" />
    <Filter title="Genres" itemList={GenreList} />
    <div className="filterblock__line" />
    <Filter title="Country" itemList={CountryList} />
    <div className="filterblock__line" />
    <Filter title="Release Year" itemList={YearList} />
    <div className="filterblock__line" />
  </div>
);

export default FilterBlock;

const CountryList = [
  "United States",
  "Vietnam",
  "Japan",
  "Korea",
  "United Kingdom",
  "China",
  "Mexico",
  "India",
  "Australia",
  "Sweden"
];
const YearList = [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];
const GenreList = [
  "Action",
  "Comedy",
  "Netflix Original",
  "Historical",
  "Romance",
  "Sci-fi",
  "Hentai"
];

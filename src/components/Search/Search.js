import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.scss";

function Search() {
  return (
    <div className="search__container">
      <button className="search__button">
        <FontAwesomeIcon icon={faSearch} color="#fff" size="lg" />
      </button>
      <input
        type="text"
        className="search__input"
        placeholder="What do you want to watch?"
      />
    </div>
  );
}

export default Search;

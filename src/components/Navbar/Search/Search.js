import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.scss";

function Search() {
  return (
    <div className="navbar__search">
      <input
        className="navbar__search__input"
        type="text"
        placeholder="Title ..."
      />
      {/* <div className="navbar__search__focus">
        <button className="navbar__search__button">
          <FontAwesomeIcon icon={faSearch} color="#fff" size="lg" />
        </button>
      </div> */}
    </div>
  );
}

export default Search;

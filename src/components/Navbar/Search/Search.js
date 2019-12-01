import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.scss";

function Search() {
  return (
    // <div className="search__container">
    //   <button className="search__button" onClick>
    //     <FontAwesomeIcon icon={faSearch} color="#fff" size="lg" />
    //   </button>
    //   <input type="text" className="search__input" />
    // </div>
    <div className="navbar__search">
      <input type="text" placeholder=" " />
      <div>
        <button className="navbar__search__button">
          <FontAwesomeIcon icon={faSearch} color="#fff" size="lg" />
        </button>
      </div>
    </div>
  );
}

export default Search;

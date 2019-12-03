import React from "react";
import "./Search.scss";

function Search() {
  return (
    <div className="navbar__search">
      <input
        className="navbar__search__input"
        type="text"
        placeholder="Title ..."
      />
    </div>
  );
}

export default Search;

import React, { Component } from "react";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import "./Filter.scss";

class Filter extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="filter-page__container">
        <div className="filter-page__left">
          <FilterBlock history={history} />
        </div>
        <div>asd</div>
      </div>
    );
  }
}

export default Filter;

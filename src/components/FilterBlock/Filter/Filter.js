import React, { Component } from "react";
import "./Filter.scss";
import FilterItem from "./FilterItem/FilterItem";
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState(state => ({
      isDisplay: !state.isDisplay
    }));
  }
  render() {
    const isDisplay = this.state.isDisplay;
    const { title, itemList } = this.props;
    return (
      <div className="filter__container">
        <div className="filter__header">
          <div className="filter__title">{title}</div>
          <div className="filter__toggle" onClick={this.handleToggle}>
            {isDisplay ? "-" : "+"}
          </div>
        </div>
        {isDisplay ? (
          <div className="filter__filteritem">
            {itemList.map(item => (
              <FilterItem filterName={item} />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Filter;

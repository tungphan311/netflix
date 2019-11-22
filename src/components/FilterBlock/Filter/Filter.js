import React, { Component } from "react";
import "./Filter.scss";
import FilterItem from "./FilterItem/FilterItem";
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: false
    };
  }

  handleToggle = () => {
    this.setState({ isDisplay: !this.state.isDisplay });
  };

  render() {
    const { isDisplay } = this.state;
    const { title, itemList } = this.props;

    const className = `filter__filteritem ${isDisplay ? "open" : "d-none"}`;

    return (
      <div className="filter__container">
        <div className="filter__header">
          <div className="filter__title">{title}</div>
          <div className="filter__toggle" onClick={this.handleToggle}>
            {isDisplay ? "-" : "+"}
          </div>
        </div>
        <div className={className}>
          {itemList.map(item => (
            <FilterItem filterName={item} />
          ))}
        </div>
      </div>
    );
  }
}
export default Filter;

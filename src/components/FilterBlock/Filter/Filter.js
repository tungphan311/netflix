import React, { Component } from "react";
import "./Filter.scss";
import FilterItem from "./FilterItem/FilterItem";
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: false,
      init: true
    };
  }

  handleToggle = () => {
    this.setState({ isDisplay: !this.state.isDisplay, init: false });
  };

  render() {
    const { isDisplay, init } = this.state;
    const { title, itemList } = this.props;

    const className = `filter__filteritem ${
      isDisplay ? "open" : "close h--0 m--0"
    } ${init ? "d-none" : ""}`;

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

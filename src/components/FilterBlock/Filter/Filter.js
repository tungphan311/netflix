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
    const { title, itemList, handleSelect, selectedList } = this.props;

    const className = `filter__filteritem ${
      isDisplay ? "item__open" : "item__close h--0"
    } ${init ? "d-none" : ""}`;

    const toggleClassName = `filter__toggle filter__toggle__${
      isDisplay ? "minus" : "plus"
    }`;

    return (
      <div className="filter__container">
        <div
          className={`filter__header ${
            isDisplay ? "m__b--24" : "header__close"
          }`}
        >
          <div className="filter__title">{title}</div>
          <div className={toggleClassName} onClick={this.handleToggle}></div>
        </div>
        <div className={className}>
          {itemList.map(item => (
            <FilterItem
              key={item}
              filterName={item}
              handleSelect={handleSelect}
              title={title}
              isChecked={
                selectedList !== undefined && selectedList !== null
                  ? Array.from(selectedList).includes(item.toLowerCase())
                  : false
              }
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Filter;

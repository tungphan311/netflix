import React, { Component } from "react";
import { FILTER_LIST } from "../../constants";
import Filter from "./Filter/Filter";
import "./FilterBlock.scss";
import FilmType from "./FilmType/FilmType";

class FilterBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: { value: "Both", label: "Both" },
      selectedList: {}
    };
  }

  componentDidMount = () => {
    let newState = { ...this.state };
    FILTER_LIST.map(({ title }) => {
      let { selectedList } = newState;
      selectedList = { ...selectedList, [title.toLowerCase()]: [] };
      newState = { ...newState, selectedList: selectedList };
      return 0;
    });
    this.setState({ ...newState });
  };

  handleSelect = (title, item) => {
    const { selectedList } = this.state;

    if (selectedList[`${title.toLowerCase()}`]) {
      this.setState(curState => {
        let newState = { ...curState };
        let newArray = [];
        let curList = newState.selectedList[`${title.toLowerCase()}`];
        if (curList.includes(item)) newArray = curList.filter(x => x !== item);
        else newArray = [...curList, item];

        const key = title.toLowerCase();
        let { selectedList } = newState;
        selectedList = { ...selectedList, [key]: newArray };

        return {
          ...newState,
          selectedList: selectedList
        };
      });
    }
  };

  handleTypeChange = type => {
    this.setState(state => ({ ...state, selectedType: type }));
  };

  render() {
    console.log(this.state);
    const { selectedType } = this.state;
    return (
      <div className="filterblock__container">
        <div className="m__l--20 m__b--30 uppercase">Filter by</div>
        <div className="filterblock__line" />
        <FilmType
          selectedOption={selectedType}
          onChange={this.handleTypeChange}
        />
        <div className="filterblock__line" />
        {FILTER_LIST.map(({ title, sub }) => (
          <>
            <Filter
              title={title}
              itemList={sub}
              handleSelect={this.handleSelect}
            />
            <div className="filterblock__line" />
          </>
        ))}
        <div className="button-container">button here</div>
      </div>
    );
  }
}

export default FilterBlock;

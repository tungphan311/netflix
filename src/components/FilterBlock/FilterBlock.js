import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FILTER_LIST } from "../../constants";
import Filter from "./Filter/Filter";
import "./FilterBlock.scss";
import FilmType from "./FilmType/FilmType";
import "bootstrap/dist/css/bootstrap.min.css";

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

  handleReset = () => {
    let newState = { ...this.state };
    FILTER_LIST.map(({ title }) => {
      let { selectedList } = newState;
      selectedList = { ...selectedList, [title.toLowerCase()]: [] };
      newState = { ...newState, selectedList: selectedList };
      return 0;
    });
    this.setState({
      ...newState,
      selectedType: { value: "Both", label: "Both" }
    });
  };

  handleApply = history => () => {
    // handle apply here
    const queryString = require("query-string");
    let query = "";
    const curState = this.state;
    if (curState.selectedType.value !== "Both")
      query = query + "type=" + curState.selectedType.value.toLowerCase() + "&";
    Object.keys(curState.selectedList).forEach((key, index) => {
      if (curState.selectedList[key].length > 0) {
        const obj = {
          [key]: curState.selectedList[key]
        };
        query =
          query + queryString.stringify(obj, { arrayFormat: "comma" }) + "&";
      }
    });
    query = query.slice(0, -1); //remove last &
    history.push(`/browse?${query}`);
  };

  parseQueryString = search => {
    const queryString = require("query-string");
    const obj = queryString.parse(search, { arrayFormat: "comma" });
    let newState = { ...this.state };
    if (obj.type)
      newState = {
        ...newState,
        selectedType: { value: obj.type, label: obj.type }
      };
    let selectedList = { ...newState.selectedList };
    FILTER_LIST.map(({ title }) => {
      if (obj[`${title.toLowerCase()}`]) {
        if (!Array.isArray(obj[`${title.toLowerCase()}`]))
          //convert obj to array if it's not
          obj[`${title.toLowerCase()}`] = [obj[`${title.toLowerCase()}`]];
        selectedList = {
          ...selectedList,
          [title.toLowerCase()]: obj[`${title.toLowerCase()}`]
        };
      }
    });
    newState = { ...newState, selectedList: selectedList };
    this.setState({ ...newState });
  };

  render() {
    const { selectedType, selectedList } = this.state;
    const { history } = this.props;
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
              selectedList={selectedList[`${title.toLowerCase()}`]}
            />
            <div className="filterblock__line" />
          </>
        ))}
        <div className="button__container">
          <Button variant="primary button__reset" onClick={this.handleReset}>
            Reset
          </Button>
          <Button
            variant="primary button__apply"
            onClick={this.handleApply(history)}
          >
            Apply
          </Button>
        </div>
      </div>
    );
  }
}

export default FilterBlock;

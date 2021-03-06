import React, { Component } from "react";
import { Button } from "react-bootstrap";
import queryString from "query-string";
import { FILTER_LIST, DEFAULT_FILMTYPE, FILMTYPES } from "../../constants";
import Filter from "./Filter/Filter";
import "./FilterBlock.scss";
import FilmType from "./FilmType/FilmType";

class FilterBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: DEFAULT_FILMTYPE,
      selectedList: {}
    };
  }

  componentDidMount = async () => {
    const { history } = this.props;
    await this.initState();
    this.parseQueryString(history.location.search);
  };

  initState = () => {
    let newState = { ...this.state };
    FILTER_LIST.map(({ title }) => {
      let { selectedList } = newState;
      selectedList = { ...selectedList, [title.toLowerCase()]: [] };
      newState = { ...newState, selectedList };
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
        if (curList.includes(item.toLowerCase()))
          newArray = curList.filter(x => x !== item.toLowerCase());
        else newArray = [...curList, item.toLowerCase()];

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
      newState = { ...newState, selectedList };
      return 0;
    });
    this.setState({
      ...newState,
      selectedType: DEFAULT_FILMTYPE
    });
  };

  handleApply = () => {
    // handle apply here
    const { history } = this.props;
    let query = "";
    const curState = this.state;
    if (curState.selectedType.value !== DEFAULT_FILMTYPE.value)
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
    const obj = queryString.parse(search, { arrayFormat: "comma" });
    let newState = { ...this.state };
    if (obj.type) {
      const temp = FILMTYPES.find(
        x => x.toLowerCase() === obj.type.toLowerCase()
      );
      newState = {
        ...newState,
        selectedType: { value: temp, label: temp }
      };
    }
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
      return null;
    });
    newState = { ...newState, selectedList: selectedList };
    this.setState({ ...newState });
  };

  render() {
    const { selectedType, selectedList } = this.state;
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
          <div key={title}>
            <Filter
              title={title}
              itemList={sub}
              handleSelect={this.handleSelect}
              selectedList={selectedList[`${title.toLowerCase()}`]}
            />
            <div className="filterblock__line" />
          </div>
        ))}
        <div className="button__container">
          <Button variant="primary button__reset" onClick={this.handleReset}>
            Reset
          </Button>
          <Button variant="primary button__apply" onClick={this.handleApply}>
            Apply
          </Button>
        </div>
      </div>
    );
  }
}

export default FilterBlock;

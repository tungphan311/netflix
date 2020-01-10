import React, { Component } from "react";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import "./Filter.scss";
import Search from "../../components/Search/Search";
import Row from "../../components/Row/Row";
import { MOVIES } from "../../constants";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      select: 0,
      hover: 0,
      movies: [],
      rowSelect: 0
    };
  }

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    const width = window.innerWidth;

    const item =
      width < 500
        ? 3
        : width >= 500 && width < 800
        ? 4
        : width >= 800 && width < 1100
        ? 5
        : width >= 1100 && width < 1441
        ? 6
        : 7;

    const newList = splitList(item, MOVIES);
    this.setState({ width, movies: newList });
  };

  changeRow = id => {
    this.setState({ rowSelect: id });
  };

  render() {
    const { history } = this.props;
    const { movies, rowSelect, width } = this.state;

    return (
      <div className="content">
        <div className="filter-page__container">
          <div className="filter-page__left">
            <FilterBlock history={history} />
          </div>
          <div className="filter-page__right">
            <div className="w--100 h--44">
              <Search />
            </div>

            <label className="m__t--40 font__weight--bold font__size--x-large">
              {MOVIES.length} Results
            </label>
            <hr className="result__line" />

            <div className="filter__result__container" ref={this.container}>
              {movies.map((list, index) => (
                <Row
                  rowId={index + 1}
                  key={index}
                  list={list}
                  history={history}
                  changeRow={this.changeRow}
                  rowSelect={rowSelect}
                  width={width}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;

const splitList = (item, list) => {
  let temp = [];
  let newList = [];

  if (item > 0) {
    list.map((sub, index) => {
      temp = [...temp, sub];

      if (index % item === item - 1) {
        newList = [...newList, temp];
        temp = [];
      }

      if (index === list.length - 1) {
        newList = [...newList, temp];
      }

      return null;
    });
  }

  return newList;
};

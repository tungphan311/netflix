import React, { Component } from "react";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import "./Filter.scss";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import { MOVIES } from "../../constants";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  divideArray = array => {
    const { width } = this.state;
    const num = width > 950 ? 4 : width > 420 ? 3 : 2;

    let subArray = [];
    let newArray = [];

    // eslint-disable-next-line array-callback-return
    array.map((value, index) => {
      subArray = [...subArray, value];
      if (index % num === num - 1 || index === array.length - 1) {
        newArray = [...newArray, subArray];
        subArray = [];
      }
    });

    return newArray;
  };

  render() {
    const { history } = this.props;
    const movies = this.divideArray(MOVIES);

    return (
      <div className="filter-page__container">
        <div className="filter-page__left">
          <FilterBlock history={history} />
        </div>
        <div className="filter-page__right">
          <div className="w--100 h--44">
            <Search />
          </div>

          <label className="m__t--40 font__weight--bold font__size--x-large">
            1801 Results
          </label>
          <hr className="result__line" />

          <div className="filter__result__container">
            {movies.map((movie, index) => (
              <div key={index} className="filter__slider">
                {movie.map((item, index) => (
                  <Card key={index} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;

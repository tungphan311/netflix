import React, { Component } from "react";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import "./Filter.scss";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import { MOVIES } from "../../constants";
import { divideArray } from "../../utils/utils";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      containerWidth: 0
    };

    this.container = React.createRef();
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      containerWidth: this.container.current.offsetWidth
    });
  };

  render() {
    const { history } = this.props;
    const { width, containerWidth } = this.state;

    const movies = divideArray(MOVIES, width);

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
              1801 Results
            </label>
            <hr className="result__line" />

            <div className="filter__result__container" ref={this.container}>
              {movies.map((movie, index) => (
                <div key={index} className="filter__slider m__t--20">
                  {movie.map((item, index) => (
                    <div key={index} className="filter__slider__item">
                      <Card
                        image={item}
                        containerwidth={containerWidth}
                        screenWidth={width}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;

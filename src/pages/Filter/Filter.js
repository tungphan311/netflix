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

            <div className="filter__result__container">
              {movies.map((list, index) => (
                <Row
                  rowId={index + 1}
                  key={index}
                  list={list}
                  history={history}
                  changeRow={this.changeRow}
                  rowSelect={rowSelect}
                  width={width}
                  formatSlideItem={formatSlideItem}
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

export const splitList = (item, list) => {
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

const formatSlideItem = (id, hover, width, select) => {
  if (select > 0) return;

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

  if (item === 6)
    if (hover > 0) {
      if (hover === 1) {
        return id === 1
          ? {
              zIndex: 4,
              transform: "translate3d(182px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 1
          ? {
              transform: "translate3d(358px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 2) {
        return id === 2
          ? {
              zIndex: 4,
              transform: "translate3d(120px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 2 && id > 0
          ? {
              transform: "translate3d(-48px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 2 && id < 7
          ? {
              transform: "translate3d(288px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 3) {
        return id === 3
          ? {
              zIndex: 4,
              transform: "translate3d(80px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 3 && id > 0
          ? {
              transform: "translate3d(-90px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 3 && id < 7
          ? {
              transform: "translate3d(248px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 4) {
        return id === 4
          ? {
              zIndex: 4,
              transform: "translate3d(40px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 4 && id > 0
          ? {
              transform: "translate3d(-128px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 4 && id <= 6
          ? {
              transform: "translate3d(208px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 5) {
        return id === 5
          ? {
              zIndex: 4,
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 5 && id > 0
          ? {
              transform: "translate3d(-168px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 5 && id <= 6
          ? {
              transform: "translate3d(168px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 6) {
        return id === 6
          ? {
              zIndex: 4,
              transform: "translate3d(-181px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 6 && id > 0
          ? {
              transform: "translate3d(-350px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      }
    } else {
      return {
        transform: "translate3d(0px, 0px, 0px)",
        transitionDuration: "500ms",
        transitionDelay: "0ms"
      };
    }
};

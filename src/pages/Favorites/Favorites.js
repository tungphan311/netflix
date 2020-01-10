import React, { Component } from "react";
import "./Favorites.scss";
import { splitList } from "../Filter/Filter";
import { SLIDERS } from "../../constants";
import Row from "../../components/Row/Row";

class Favorites extends Component {
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

    const newList = splitList(item, SLIDERS[1].list);
    this.setState({ width, movies: newList });
  };

  changeRow = id => {
    this.setState({ rowSelect: id });
  };

  render() {
    const { history } = this.props;
    const { movies, rowSelect, width } = this.state;

    return (
      <div className="page-container">
        <div className="header"></div>
        <div className="page--title">
          <div className="title">My Favorites</div>
        </div>
        <div>
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
    );
  }
}

export default Favorites;

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
              transform: "translate3d(222px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 1
          ? {
              transform: "translate3d(448px, 0px, 0px)",
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
              transform: "translate3d(-88px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 2 && id < 7
          ? {
              transform: "translate3d(328px, 0px, 0px)",
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
              transform: "translate3d(-145px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 3 && id < 7
          ? {
              transform: "translate3d(303px, 0px, 0px)",
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
              transform: "translate3d(-185px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 4 && id <= 6
          ? {
              transform: "translate3d(256px, 0px, 0px)",
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
              transform: "translate3d(-225px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 5 && id <= 6
          ? {
              transform: "translate3d(218px, 0px, 0px)",
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
              transform: "translate3d(-211px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 6 && id > 0
          ? {
              transform: "translate3d(-437px, 0px, 0px)",
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

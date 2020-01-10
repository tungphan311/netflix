import React, { Component } from "react";
import "./Row.scss";
import { BobOpen } from "../MovieRow/SliderItem";
import Detail from "../MovieRow/Detail";

class Row extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      select: 0,
      hover: 0,
      movies: []
    };
  }

  selectDetail = id => {
    this.setState({ select: id });
  };

  setHover = hover => {
    this.setState({ hover });
  };

  render() {
    const { list, history, changeRow, rowId, rowSelect, width } = this.props;
    const { select, hover } = this.state;

    return (
      <div className={`gallery ${rowSelect === rowId ? "gallery-open" : ""}`}>
        <div className="rowContainer verticalBoxArtRow rowContainer_title_card">
          <div className="ptrack-container">
            <div className="rowContent slider-hover-trigger-layer">
              <div className="slider">
                <div className="sliderMask showPeek">
                  <div className="sliderContent row-with-x-columns">
                    {list.map((detail, index) => (
                      <Movie
                        key={index}
                        index={index + 1}
                        detail={detail}
                        history={history}
                        selectDetail={this.selectDetail}
                        rowId={rowId}
                        changeRow={changeRow}
                        width={width}
                        select={select}
                        hover={hover}
                        setHover={this.setHover}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Detail
              select={select}
              selectDetail={this.selectDetail}
              width={width}
              changeRow={changeRow}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Row;

const Movie = ({
  detail: {
    id,
    movId,
    avatar,
    background,
    name,
    href,
    score,
    isWatching,
    ep,
    epName,
    epLength,
    stop,
    limit,
    length,
    genres
  },
  history,
  selectDetail,
  rowId,
  changeRow,
  width,
  hover,
  setHover,
  select,
  index
}) => (
  <div
    className="slider-item"
    style={formatSlideItem(index, hover, width, select)}
    onMouseEnter={() => setHover(index)}
    onMouseLeave={() => setHover(0)}
  >
    <div className="title-card-container">
      <div
        className={`slider-refocus title-card ${
          hover === index && !select ? "is-bob-open" : ""
        }`}
      >
        <div className="ptrack-content">
          <a className="slider-refocus" href="#">
            <div className="boxart-size-vertical boxart-container">
              <img
                className="boxart-image boxart-image-in-padded-container"
                src={avatar}
                alt="logo"
              />
            </div>
          </a>
        </div>
        <div className="bob-container">
          {hover === index && !select && (
            <BobOpen
              id={id}
              movId={movId}
              url={background}
              href={href}
              name={name}
              score={score}
              limit={limit}
              length={length}
              selectDetail={selectDetail}
              history={history}
              isWatching={isWatching}
              ep={ep}
              epName={epName}
              epLength={epLength}
              stop={stop}
              rowId={rowId}
              changeRow={changeRow}
            />
          )}
        </div>
      </div>
    </div>
  </div>
);

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

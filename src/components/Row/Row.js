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
    const {
      list,
      history,
      changeRow,
      rowId,
      rowSelect,
      width,
      formatSlideItem
    } = this.props;
    const { select, hover } = this.state;

    return (
      <div className={`gallery ${rowSelect === rowId ? "gallery-open" : ""}`}>
        <div className="rowContainer verticalBoxArtRow rowContainer_title_card">
          <div className="ptrack-container">
            <div className="rowContent slider-hover-trigger-layer">
              <div className="slider" style={{ padding: 0 }}>
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
                        formatSlideItem={formatSlideItem}
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
  index,
  formatSlideItem
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

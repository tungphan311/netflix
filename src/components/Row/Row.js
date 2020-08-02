import React, { Component } from "react";
import "./Row.scss";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { BobOpen } from "../MovieRow/SliderItem";
import Detail from "../MovieRow/Detail";
import { formatSlideItem } from "../../utils/utils";
import { CERTIFICATES } from "../../constants";

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
    const { list, history, changeRow, rowId, rowSelect } = this.props;
    const { select, hover } = this.state;

    return (
      <div
        className={`rowContainer rowContainer_title_card ${
          rowSelect === rowId ? "jawBoneOpen" : ""
        }`}
      >
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
            changeRow={changeRow}
            rowId={rowId}
            rowSelect={rowSelect}
          />
        </div>
      </div>
    );
  }
}

export default Row;

const Movie = ({
  detail: { id, background, name, href, score, length, certification },
  selectDetail,
  rowId,
  changeRow,
  hover,
  setHover,
  select,
  index
}) => {
  const cer = CERTIFICATES.find(c => c.certification === certification)
    ? CERTIFICATES.find(c => c.certification === certification)
    : {
        certification: "G",
        meaning: ""
      };

  return (
    <div
      className="slider-item"
      style={formatSlideItem(index, hover, select)}
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
            <Link className="slider-refocus" to="#">
              <SkeletonTheme highlightColor="#444">
                <div className="boxart-size-16x9 boxart-container">
                  <img
                    className="boxart-image boxart-image-in-padded-container"
                    src={background}
                    alt="logo"
                  />
                </div>
              </SkeletonTheme>
            </Link>
          </div>
          <div className="bob-container">
            {hover === index && !select && (
              <BobOpen
                id={id}
                url={background}
                href={href}
                name={name}
                score={score}
                length={length}
                selectDetail={selectDetail}
                rowId={rowId}
                changeRow={changeRow}
                setHover={setHover}
                cer={cer}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

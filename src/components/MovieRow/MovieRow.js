import React, { Component } from "react";
import "./MovieRow.scss";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SliderItem from "./SliderItem";
import Detail from "./Detail";

class MovieRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      item: 0,
      page: 0,
      hover: 0,
      numOfPages: 0,
      movies: [],
      show: false,
      select: 0
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.rowSelect !== this.props.rowId) {
      this.setState({ select: 0 });
    }

    const newList = splitList(6, nextProps.list);
    this.setState({ item: 6, movies: newList });
  };

  renderIndicator = () => {
    const { numOfPages, page } = this.state;
    let result = [];
    for (let i = 0; i <= numOfPages; i++) {
      result = [
        ...result,
        <li key={i} id={i} className={`${page === i ? "active" : ""}`}></li>
      ];
    }

    return result;
  };

  setHover = hover => {
    this.setState({ hover });
  };

  setItem = item => {
    this.setState({ item });
  };

  handleSelect = (selectedIndex, e) => {
    this.setState({ page: selectedIndex });
  };

  selectDetail = id => {
    this.setState({ select: id });
  };

  render() {
    const { title, list, href, changeRow, rowSelect, rowId } = this.props;
    const { page, hover, item, movies, width, select } = this.state;

    return (
      <div
        className={`mvRow mvRow_title_card ${
          rowSelect === rowId ? "mvRow-open" : ""
        }`}
        onMouseEnter={() => this.setState({ show: true })}
        onMouseLeave={() => this.setState({ show: false })}
      >
        <SkeletonTheme highlightColor="#444">
          <h2 className="rowHeader">
            {href ? (
              <Link className="rowTitle" aria-label={title} to={href}>
                <div className="row-header-title">{title}</div>
                <div className="aro-row-header">
                  <div className="see-all-link">Explore All</div>
                  <div
                    className={`aro-row-chevron icon-akiraCaretRight ${
                      this.state.show ? "show-chevron" : ""
                    }`}
                  ></div>
                </div>
              </Link>
            ) : (
              <span className="rowTitle" aria-label={title}>
                {title ? (
                  <div className="row-header-title">{title}</div>
                ) : (
                  <Skeleton duration={2} width={200} />
                )}
              </span>
            )}
          </h2>
        </SkeletonTheme>
        <div className="rowContainer verticalBoxArtRow rowContainer_title_card">
          <div className="ptrack-container">
            <div
              className={`rowContent slider-hover-trigger-layer ${
                list.length <= item ? "no-indicator" : ""
              } `}
            >
              <Carousel
                interval={null}
                onSelect={this.handleSelect}
                prevIcon={
                  <span
                    className="handle handlePrev active"
                    tabIndex="0"
                    role="button"
                  >
                    <b className="indicator-icon icon-leftCaret"></b>
                  </span>
                }
                nextIcon={
                  <span
                    className="handle handleNext active"
                    tabIndex="0"
                    role="button"
                  >
                    <b className="indicator-icon icon-rightCaret"></b>
                  </span>
                }
              >
                {movies &&
                  movies.map((subList, i) => (
                    <Carousel.Item key={i}>
                      {subList.map((sub, index) => (
                        <SliderItem
                          index={index + 1}
                          key={index}
                          hover={hover}
                          setHover={this.setHover}
                          details={sub}
                          page={page}
                          item={item}
                          selectDetail={this.selectDetail}
                          select={select}
                          rowId={rowId}
                          changeRow={changeRow}
                          width={width}
                        />
                      ))}
                    </Carousel.Item>
                  ))}
              </Carousel>
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

export default MovieRow;

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
        if (temp.length) {
          newList = [...newList, temp];
        }
      }

      return null;
    });
  }

  return newList;
};

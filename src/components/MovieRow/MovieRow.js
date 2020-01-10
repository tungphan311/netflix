import React, { Component } from "react";
import "./MovieRow.scss";
import { Carousel } from "react-bootstrap";
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

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    const width = window.innerWidth;
    const { list } = this.props;

    const item =
      width < 800
        ? 4
        : width >= 800 && width < 1100
        ? 6
        : width >= 1100 && width < 1441
        ? 8
        : 9;

    const newList = splitList(item, list);
    this.setState({ width, item, movies: newList });
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.rowSelect !== this.props.rowId) {
      this.setState({ select: 0 });
    }
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
    const {
      title,
      history,
      list,
      myList,
      changeRow,
      rowSelect,
      rowId
    } = this.props;
    const { page, hover, item, movies, width, select } = this.state;

    return (
      <div
        className={`mvRow mvRow_title_card ${
          rowSelect === rowId ? "mvRow-open" : ""
        }`}
        onMouseEnter={() => this.setState({ show: true })}
        onMouseLeave={() => this.setState({ show: false })}
      >
        <h2 className="rowHeader">
          {myList ? (
            <a className="rowTitle" aria-label={title} href="/my-favorites">
              <div className="row-header-title">{title}</div>
              <div className="aro-row-header">
                <div className="see-all-link">Explore All</div>
                <div
                  className={`aro-row-chevron icon-akiraCaretRight ${
                    this.state.show ? "show-chevron" : ""
                  }`}
                ></div>
              </div>
            </a>
          ) : (
            <span className="rowTitle" aria-label={title}>
              <div className="row-header-title">{title}</div>
            </span>
          )}
        </h2>
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
                          history={history}
                          selectDetail={this.selectDetail}
                          select={select}
                          rowId={rowId}
                          changeRow={changeRow}
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
        newList = [...newList, temp];
      }

      return null;
    });
  }

  return newList;
};

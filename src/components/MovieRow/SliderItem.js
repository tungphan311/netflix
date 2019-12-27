import React, { Component } from "react";
import { Like, Dislike, AddToList, ChevronDown } from "../../constants";
import { formatSlideItem } from "../../utils/utils";

class SliderItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      item: 0
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
      width < 800
        ? 4
        : width >= 800 && width < 1100
        ? 6
        : width >= 1100 && width < 1400
        ? 8
        : 9;
    this.setState({ width, item });
    this.props.setItem(item);
  };

  render() {
    const { hover, setHover, details, page } = this.props;
    const {
      id,
      avatar,
      background,
      href,
      name,
      score,
      limit,
      length
    } = details;

    const { item } = this.state;

    return (
      <div
        className="slider-item"
        style={formatSlideItem(id, hover, item, page)}
        onMouseEnter={() => setHover(id)}
        onMouseLeave={() => setHover(0)}
      >
        <div className="title-card-container">
          <div
            className={`slider-refocus title-card ${
              hover === id ? "is-bob-open" : ""
            }`}
          >
            <div className="ptrack-content">
              <a href={href} tabIndex="0" className="slider-refocus">
                <div className="boxart-size-vertical boxart-container">
                  <img
                    className="boxart-image boxart-image-in-padded-container"
                    src={avatar}
                    alt=""
                  />
                  <div className="fallback-text-container" aria-hidden="true">
                    <p className="fallback-text">{name}</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="bob-container">
              <span>
                {hover === id ? (
                  <BobOpen
                    url={background}
                    href={href}
                    name={name}
                    score={score}
                    limit={limit}
                    length={length}
                  />
                ) : null}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderItem;

const BobOpen = ({ url, href, name, score, limit, length }) => (
  <div
    className="bob-card bob-card-adult-video-merch"
    style={{
      transform: "scale(0.99999)",
      visibility: "visible",
      width: "124%",
      height: "124%",
      top: "-12%",
      left: "-12%",
      transitionDuration: "500ms"
    }}
  >
    <div>
      <div className="bob-background">
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${url})`
          }}
        ></div>
      </div>
      <div className="bob-overlay">
        <div className="bob-play-hitzone"></div>
        <a aria-label={name} className="bob-jaw-hitzone" href={href}></a>
        <div className="bob-overview-wrapper">
          <div className="bob-overview">
            <a tabIndex="0" className="bob-play-button playLink" href={href}>
              <span className="play-button"></span>
            </a>
            <div className="bob-title">{name}</div>
            <div className="bob-overview-resume-title-wrapper"></div>
            <div className="bob-metadata-wrapper">
              <div className="meta video-meta video-meta--bob-overview">
                <span className="match-score-wrapper">
                  <div className="show-match-score rating-inner"></div>
                  <div className="meta-thumb-container thumb-up"></div>
                  <span className="match-score">{score}</span>
                </span>
                <span className="maturity-rating ">
                  <span className="maturity-number">{limit}</span>
                </span>
                <span className="duration">{length}</span>
              </div>
            </div>
            <div className="bob-overview-evidence-wrapper">
              <div className="evidence-tags">
                <div className="evidence-list">
                  <div className="evidence-item">
                    <span className="evidence-text">Comedy</span>
                  </div>
                  <div className="evidence-item">
                    <span className="evidence-separator"></span>
                    <span className="evidence-text">Alien Sci-Fi</span>
                  </div>
                  <div className="evidence-item">
                    <span className="evidence-separator"></span>
                    <span className="evidence-text">Action </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bob-actions-wrapper">
          <span className="ActionButtons">
            <div className="thumbs-component thumbs thumbs-vertical animated unrated">
              <div
                className="nf-svg-button-wrapper thumb-container thumb-up-container "
                data-uia=""
              >
                <a
                  role="link"
                  data-rating="2"
                  tabIndex="0"
                  className="nf-svg-button simpleround"
                  aria-label="Rate thumbs up"
                >
                  <svg
                    data-rating="2"
                    className="svg-icon svg-icon-thumb-up"
                    focusable="true"
                  >
                    {Like}
                  </svg>
                </a>
              </div>
              <div
                className="nf-svg-button-wrapper thumb-container thumb-down-container "
                data-uia=""
              >
                <a
                  role="link"
                  data-rating="1"
                  tabIndex="0"
                  className="nf-svg-button simpleround"
                  aria-label="Rate thumbs down"
                >
                  <svg
                    data-rating="1"
                    className="svg-icon svg-icon-thumb-down"
                    focusable="true"
                  >
                    {Dislike}
                  </svg>
                </a>
              </div>
            </div>
            <div className="ptrack-content">
              <div
                className="nf-svg-button-wrapper mylist-button"
                data-uia="myListButton"
              >
                <a
                  role="link"
                  tabIndex="0"
                  className="nf-svg-button simpleround"
                >
                  <svg
                    className="svg-icon svg-icon-mylist-add"
                    focusable="true"
                  >
                    {AddToList}
                  </svg>
                </a>
                <span
                  className="nf-svg-button-tooltip"
                  role="status"
                  aria-live="assertive"
                >
                  Add To My List
                </span>
              </div>
            </div>
          </span>
        </div>
        <div className="bob-chevron-wrapper">
          <div className="bob-jawbone-chevron">{ChevronDown}</div>
        </div>
      </div>
    </div>
  </div>
);

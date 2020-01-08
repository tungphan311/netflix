import React, { Component } from "react";
import { AddToList, ChevronDown, Play } from "../../constants";
import { formatSlideItem } from "../../utils/utils";

class SliderItem extends Component {
  render() {
    const {
      hover,
      setHover,
      details,
      page,
      item,
      history,
      selectDetail,
      select
    } = this.props;

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

    return (
      <div
        className="slider-item"
        style={formatSlideItem(id, hover, item, page, select)}
        onMouseEnter={() => setHover(id)}
        onMouseLeave={() => setHover(0)}
      >
        <div className="title-card-container">
          <div
            className={`slider-refocus title-card ${
              hover === id && !select ? "is-bob-open" : ""
            }`}
          >
            <div className="ptrack-content">
              <a
                tabIndex="0"
                className="slider-refocus"
                onClick={() => selectDetail(id)}
              >
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
                {select !== id && (
                  <div className="click-to-change-JAW-indicator is-another-JAW-open">
                    <div className="bob-jawbone-chevron">{ChevronDown}</div>
                  </div>
                )}
              </a>
              {select === id && (
                <div
                  className="title-card-jawbone-focus"
                  style={{ opacity: 1, transitionDuration: "300ms" }}
                >
                  <div className="title-card-focus-ring"></div>
                  <a className="title-card-play playLink" href={href}>
                    <div className="playRing">
                      <div className="play icon-play"></div>
                    </div>
                  </a>
                </div>
              )}
            </div>
            <div className="bob-container">
              <span>
                {hover === id && !select && (
                  <BobOpen
                    id={id}
                    url={background}
                    href={href}
                    name={name}
                    score={score}
                    limit={limit}
                    length={length}
                    selectDetail={selectDetail}
                    history={history}
                  />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderItem;

const BobOpen = ({
  id,
  url,
  href,
  name,
  score,
  limit,
  length,
  selectDetail,
  history
}) => (
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
        <div
          className="bob-play-hitzone"
          onClick={() => history.push(`/watch/${id}`)}
        ></div>
        <a
          aria-label={name}
          className="bob-jaw-hitzone"
          onClick={() => selectDetail(id)}
        ></a>
        <div className="bob-overview-wrapper">
          <div className="bob-overview">
            <a tabIndex="0" className="bob-play-button playLink" href={href}>
              <span className="play-button">
                <svg
                  className="svg-icon svg-icon-play-with-ring"
                  focusable="true"
                >
                  {Play}
                </svg>
              </span>
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

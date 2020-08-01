import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  AddToList,
  ChevronDown,
  Play,
  AddedToList,
  CERTIFICATES
} from "../../constants";
import { formatSlideItem } from "../../utils/utils";
import history from "../../state/history";

class SliderItem extends Component {
  render() {
    const {
      hover,
      setHover,
      details,
      item,
      selectDetail,
      select,
      rowId,
      changeRow,
      index
    } = this.props;

    const {
      id,
      movId,
      background,
      name,
      love,
      score,
      certification,
      length,
      isWatching,
      ep,
      epName,
      epLength,
      stop
    } = details;

    const cer = certification
      ? CERTIFICATES.find(c => c.certification === certification)
      : {
          certification: "G",
          meaning: ""
        };

    return (
      <div
        className="slider-item"
        style={formatSlideItem(index, hover, item, select)}
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
              <a
                tabIndex="0"
                className="slider-refocus"
                onClick={() => selectDetail(movId)}
              >
                <div className="boxart-size-16x9 boxart-container">
                  <img
                    className="boxart-image boxart-image-in-padded-container"
                    src={background}
                    alt=""
                  />
                </div>
                {select !== movId && (
                  <div className="click-to-change-JAW-indicator is-another-JAW-open">
                    <div className="bob-jawbone-chevron">{ChevronDown}</div>
                  </div>
                )}
              </a>
              {select === movId && (
                <div
                  className="title-card-jawbone-focus"
                  style={{ opacity: 1, transitionDuration: "300ms" }}
                >
                  <div className="title-card-focus-ring"></div>
                  <Link
                    className="title-card-play playLink"
                    to={`/title/${id}`}
                  >
                    <div className="playRing">
                      <div className="play icon-play"></div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <div className="bob-container">
              <span>
                {hover === index && !select && (
                  <BobOpen
                    id={id}
                    movId={movId}
                    url={background}
                    name={name}
                    score={score}
                    cer={cer}
                    length={length}
                    selectDetail={selectDetail}
                    isWatching={isWatching}
                    ep={ep}
                    epName={epName}
                    epLength={epLength}
                    stop={stop}
                    rowId={rowId}
                    changeRow={changeRow}
                    love={love}
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

export const BobOpen = ({
  id,
  movId,
  url,
  name,
  score,
  cer,
  length,
  selectDetail,
  isWatching,
  ep,
  epName,
  epLength,
  stop,
  rowId,
  changeRow,
  love
}) => (
  <div
    className="bob-card bob-card-adult-video-merch"
    style={{
      transform: "scale(0.99999)",
      visibility: "visible",
      width: "195%",
      height: "195%",
      top: "-47.5%",
      left: "-47.5%",
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
          onClick={() => {
            selectDetail(movId);
            changeRow(rowId);
          }}
        ></a>
        <div className="bob-overview-wrapper">
          <div className="bob-overview">
            <Link
              tabIndex="0"
              className="bob-play-button playLink"
              to={`/title/${id}`}
            >
              <span className="play-button">
                <svg
                  className="svg-icon svg-icon-play-with-ring"
                  focusable="true"
                >
                  {Play}
                </svg>
              </span>
            </Link>
            <div className="bob-title">{name}</div>
            {isWatching ? (
              <>
                <div className="bob-overview-resume-title-wrapper">
                  <div className="watched-title watched-title--bob-overview watched-title--no-wrap">
                    <span>
                      <b>{ep}</b> {epName}
                    </span>
                  </div>
                </div>
                <div className="bob-overview-progress-wrapper">
                  <div className="progress progress--bob-overview">
                    <span className="progress-bar">
                      <span
                        role="presentation"
                        className="progress-completed"
                        style={{ width: `${(stop * 100) / epLength}%` }}
                      ></span>
                    </span>
                    <span className="summary">
                      {stop} of {epLength}m
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bob-metadata-wrapper">
                  <div className="meta video-meta video-meta--bob-overview">
                    <span className="match-score-wrapper">
                      <div className="show-match-score rating-inner"></div>
                      <div className="meta-thumb-container thumb-up"></div>
                      <span className="match-score">{score}</span>
                    </span>
                    <span className="maturity-rating">
                      <span className="maturity-number" title={cer.meaning}>
                        {cer.certification}
                      </span>
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
              </>
            )}
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
                  {!love ? (
                    <svg
                      className="svg-icon svg-icon-mylist-add"
                      focusable="true"
                    >
                      {AddToList}
                    </svg>
                  ) : (
                    <svg
                      className="svg-icon svg-icon-mylist-added"
                      focusable="true"
                    >
                      {AddedToList}
                    </svg>
                  )}
                </a>
                <span
                  className="nf-svg-button-tooltip"
                  role="status"
                  aria-live="assertive"
                >
                  {love ? "Remove from My Favorites" : "Add To My Favorites"}
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

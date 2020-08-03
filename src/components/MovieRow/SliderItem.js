import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import LazyLoad from "react-lazyload";
import { useDispatch } from "react-redux";
import {
  AddToList,
  ChevronDown,
  Play,
  AddedToList,
  CERTIFICATES
} from "../../constants";
import { formatSlideItem } from "../../utils/utils";
import history from "../../state/history";
import { actionAddToFavorite } from "../../state/action/user";
import { ADD_TO_FAVORITE } from "../../state/reducers/movieReducer";

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
      background,
      name,
      is_favorite: favorite,
      score,
      certification,
      length,
      genres
    } = details;

    const cer = CERTIFICATES.find(c => c.certification === certification)
      ? CERTIFICATES.find(c => c.certification === certification)
      : {
          certification: "G",
          meaning: ""
        };

    const bob = {
      id,
      url: background,
      name,
      score,
      cer,
      length,
      selectDetail,
      rowId,
      changeRow,
      favorite,
      genres,
      setHover
    };

    const styles = formatSlideItem(index, hover, select);

    return (
      <div
        className="slider-item"
        style={styles}
        onMouseEnter={() => background && setHover(index)}
        onMouseLeave={() => background && setHover(0)}
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
                onClick={() => background && selectDetail(id)}
              >
                <SkeletonTheme highlightColor="#444">
                  <div className="boxart-size-16x9 boxart-container">
                    {background ? (
                      <LazyLoad
                      // placeholder={
                      //   <Skeleton duration={2} className="img-skeleton" />
                      // }
                      // once
                      >
                        <img
                          className="boxart-image boxart-image-in-padded-container"
                          src={background}
                          alt=""
                        />
                      </LazyLoad>
                    ) : (
                      <Skeleton duration={2} className="img-skeleton" />
                    )}
                  </div>
                </SkeletonTheme>
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
              <span>{hover === index && !select && <BobOpen {...bob} />}</span>
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
  url,
  name,
  score,
  cer,
  length,
  selectDetail,
  rowId,
  changeRow,
  favorite,
  genres,
  setHover
}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAddToFavorite = () => {
    setLoading(true);

    dispatch(actionAddToFavorite({ id })).then(() => {
      dispatch({ type: ADD_TO_FAVORITE, id });
      setLoading(false);
    });
  };

  return (
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
            onClick={() => history.push(`/title/${id}`)}
          ></div>
          <a
            aria-label={name}
            className="bob-jaw-hitzone"
            onClick={() => {
              selectDetail(id);
              changeRow(rowId);
              setHover(0);
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
                    {genres &&
                      genres.map(({ id, name }, i) => (
                        <div className="evidence-item" key={id}>
                          {i > 0 && (
                            <span className="evidence-separator"></span>
                          )}
                          <span className="evidence-text">{name}</span>
                        </div>
                      ))}
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
                    onClick={handleAddToFavorite}
                  >
                    {!favorite ? (
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
                    {loading
                      ? favorite
                        ? "Removing ..."
                        : "Adding ..."
                      : favorite
                      ? "Remove from My Favorites"
                      : "Add To My Favorites"}
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
};

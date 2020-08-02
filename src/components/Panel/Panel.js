import React, { useState, useEffect } from "react";
import "./Panel.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { AddToList, AddedToList } from "../../constants";
import { actionAddToFavorite } from "../../state/action/user";
import { ADD_TO_FAVORITE } from "../../state/reducers/movieReducer";

function Panel({ film }) {
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();

  const { background, name, overview, certification, id, is_favorite } = film;

  useEffect(() => {
    setFavorite(is_favorite);
  }, [is_favorite]);

  const handleAddToFavorite = () => {
    setLoading(true);

    dispatch(actionAddToFavorite({ id })).then(() => {
      dispatch({ type: ADD_TO_FAVORITE, id });
      setFavorite(!favorite);
      setLoading(false);
    });
  };

  console.log(name);

  return (
    <SkeletonTheme highlightColor="#444">
      <div className="panel">
        <div className="panel__container">
          <div className="panel__motion">
            <div className="background-wrapper">
              <img className="image-layer" src={background} alt="background" />
              <div className="info-layer"></div>
              <div className="bottom-layer"></div>
            </div>
            <div className="embedded-component">
              <span className="maturity-rating">
                <span className="maturity-number">{certification}</span>
              </span>
            </div>
          </div>
          <div className="fill__container">
            <div className="info-meta-layer">
              <div className="logo-and-text">
                <div className="title__wrapper">
                  <div className="billboard-title">
                    {name ? (
                      <span className="title__name">{name}</span>
                    ) : (
                      <Skeleton duration={2} width="100%" height={50} />
                    )}
                  </div>
                </div>
                <div className="info__wrapper">
                  {overview ? (
                    <div className="synopsis no-supplemental">{` ${overview} `}</div>
                  ) : (
                    <Skeleton duration={2} width="100%" height={100} />
                  )}
                </div>
                <div className="button__wrapper">
                  {/* <Link className="play-btn" to={`/watch/${id}`}>
                    <span
                      tabIndex="-1"
                      className="nf-icon-button nf-flat-button nf-flat-button-uppercase"
                    >
                      <span className="nf-flat-button-icon nf-flat-button-icon-play"></span>
                      <span className="nf-flat-button-text">Play</span>
                    </span>
                  </Link> */}
                  <a className="love-btn" onClick={handleAddToFavorite}>
                    <span
                      tabIndex="-1"
                      className="nf-icon-button nf-flat-button nf-flat-button-uppercase"
                    >
                      {favorite ? (
                        <svg
                          className="svg-icon svg-icon-mylist-add panel-icon"
                          focusable="true"
                        >
                          {AddedToList}
                        </svg>
                      ) : (
                        <svg
                          className="svg-icon svg-icon-mylist-added panel-icon"
                          focusable="true"
                        >
                          {AddToList}
                        </svg>
                      )}
                      <span className="nf-flat-button-text">
                        {loading
                          ? favorite
                            ? "Removing ..."
                            : "Adding ..."
                          : "My Favorites"}
                      </span>
                    </span>
                  </a>
                  <Link className="more-btn" to={`/title/${id}`}>
                    <span
                      tabIndex="-1"
                      className="nf-icon-button nf-flat-button nf-flat-button-uppercase"
                    >
                      <svg
                        className="svg-icon svg-icon-info nf-flat-button-icon"
                        focusable="true"
                      >
                        <use filter="" xlinkHref="#info"></use>
                        <svg id="info" viewBox="0 0 22 22">
                          {" "}
                          <path
                            fill="currentColor"
                            d="M12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 Z M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M11,7 L11,9 L13,9 L13,7 L11,7 Z M11,11 L11,17 L13,17 L13,11 L11,11 Z"
                            id="path-1"
                          ></path>
                        </svg>
                      </svg>
                      <span className="nf-flat-button-text">More Info</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default Panel;

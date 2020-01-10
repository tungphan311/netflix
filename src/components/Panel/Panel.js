import React from "react";
import "./Panel.scss";

function Panel({ film }) {
  const { background, name, detail, limit, id } = film;

  return (
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
              <span className="maturity-number">{limit}</span>
            </span>
          </div>
        </div>
        <div className="fill__container">
          <div className="info-meta-layer">
            <div className="logo-and-text">
              <div className="title__wrapper">
                <div className="billboard-title">
                  <img
                    className="title-logo"
                    src={name}
                    title="Spider-Man: Into the Spider-Verse"
                    alt="Spider-Man: Into the Spider-Verse"
                  />
                </div>
              </div>
              <div className="info__wrapper">
                <div className="synopsis no-supplemental">{` ${detail} `}</div>
              </div>
              <div className="button__wrapper">
                <a className="play-btn" href={`/watch/${id}`}>
                  <span
                    tabIndex="-1"
                    className="nf-icon-button nf-flat-button nf-flat-button-uppercase"
                  >
                    <span className="nf-flat-button-icon nf-flat-button-icon-play"></span>
                    <span className="nf-flat-button-text">Play</span>
                  </span>
                </a>
                <a className="love-btn">
                  <span
                    tabIndex="-1"
                    className="nf-icon-button nf-flat-button nf-flat-button-uppercase"
                  >
                    <span className="nf-flat-button-icon icon-button-mylist-add"></span>
                    <span className="nf-flat-button-text">My Favorites</span>
                  </span>
                </a>
                <a className="more-btn" href={`/title/${id}`}>
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel;

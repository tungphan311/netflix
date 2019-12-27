import React from "react";
import "./Panel.scss";

function Panel({ film }) {
  const { id, background, name, detail, limit } = film;

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
                <a className="play-btn">
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
                    <span className="nf-flat-button-text">My List</span>
                  </span>
                </a>
                <a className="play-btn">
                  <span
                    tabIndex="-1"
                    className="nf-icon-button nf-flat-button nf-flat-button-uppercase"
                  >
                    <span className="nf-font-awesome-icon nf-flat-button-icon-info"></span>
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

import React from "react";
import "./Panel.scss";

function Panel() {
  return (
    <div className="panel__container">
      <div className="panel__motion">
        <div className="background-wrapper">
          <img
            className="image-layer"
            src="/assets/home.png"
            alt="background"
          />
          <div className="info-layer"></div>
          <div className="bottom-layer"></div>
        </div>
        <div className="embedded-component">
          <span className="maturity-rating">
            <span className="maturity-number">16+</span>
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
                  src="https://occ-0-64-58.1.nflxso.net/dnm/api/v6/5e0byrbbfBPBmtxyXMpKqMuqOQY/AAAABWopZrELn7g9mwzJKnclnfuen3UPzJcdZSjo5xub-vVSUbGXg04H2bTJ_7rCT7ZREz5tDrkBgN2ca4N88Wk42aGLYC-WrBvwz2RH.webp?r=11a"
                  title="Spider-Man: Into the Spider-Verse"
                  alt="Spider-Man: Into the Spider-Verse"
                />
              </div>
            </div>
            <div className="info__wrapper">
              <div className="synopsis no-supplemental">
                {" "}
                He's your friendly neighborhood crime fighter. And so's she. And
                that little fella over there is, too. With a leap of faith,
                anyone can wear the mask.{" "}
              </div>
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
  );
}

export default Panel;

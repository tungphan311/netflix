import React, { useState } from "react";
import "./Detail.scss";
import { Like } from "../../constants/like";
import { Dislike } from "../../constants/dislike";
import DetailMenu from "./DetailMenu";

function Detail({ select, selectDetail }) {
  const [selectedPane, setSelectedPane] = useState("Overview");

  return (
    <div className={`jawBoneContent ${select === 0 ? "" : "open"}`}>
      <span
        className={`jawBoneOpenContainer ${
          select === 0 ? "jawBoneOpen-leave jawBoneOpen-leave-active" : ""
        }`}
      >
        <div className="jawBoneFadeInPlaceContainer">
          <div className="jawBoneContainer slider-hover-trigger-layer">
            <div className="background">
              <div className="jawBoneBackground image-rotator">
                <span>
                  <div className="ptrack-content">
                    <div
                      className="image-rotator-image "
                      style={{
                        backgroundImage:
                          "url('https://occ-0-64-58.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVfuuY7rV_VD_FAGw7Zki23OyLVuoy6JpPQUJZNX2jqWYZW7siwz_XCDFhxlLqnL82ND8Unf6SRNtGYWpjazXcig42nU.webp?r=3dd')",
                        zIndex: 2,
                        opacity: 1,
                        transitionDuration: "750ms"
                      }}
                    ></div>
                  </div>
                </span>
              </div>
              <div className="vignette"></div>
              <div className="nav-shadow"></div>
            </div>
            <div className="jawBone">
              <h3>
                <a className="jawbone-title-link" href="#">
                  <div
                    className="title has-jawbone-nav-transition original"
                    style={{
                      transform: "translateX(0px)",
                      opacity: 1,
                      transitionDelay: "250ms",
                      transitionDuration: "500ms"
                    }}
                  >
                    <img
                      alt="Lucifer"
                      className={`${
                        selectedPane === "Overview" ? "logo" : "logo small-logo"
                      }`}
                      src="https://occ-0-64-58.1.nflxso.net/dnm/api/v6/jsgGe9NCko3c-j0wGZ7FSwVlHs0/AAAABaXk_ip61RVo_EFyT33jCROuxdRzjzmzK76SzYjy24h2oZzjsfXKi6lUjUJn7scGL8Zqn2OdeeUwdyrZ3fo7k0mgO4jrC4eboiKY0YnvzI0nf1DwqkXMd7dj70Kglyq_b4mY0VJHIcvdEMgjPOcaxad-Cqbgde9aTIPEo7784sA.webp?r=95c"
                    />
                  </div>
                </a>
              </h3>
              <div className="jawBoneCommon">
                <div
                  className={`${
                    selectedPane === "Overview"
                      ? "jawBonePanes"
                      : "jawBonePanes offset-for-logo"
                  }`}
                >
                  <div
                    className="jawBonePane"
                    tabIndex={-1}
                    style={{ opacity: 1, transitionDuration: "300ms" }}
                  >
                    <div className="ptrack-container">
                      {selectedPane === "Overview" && <OverviewPane />}
                    </div>
                  </div>
                </div>
              </div>
              <DetailMenu
                selected={selectedPane}
                handleSelect={setSelectedPane}
              />
            </div>
            <button
              className="close-button icon-close"
              tabIndex="0"
              onClick={() => selectDetail(0)}
            ></button>
          </div>
        </div>
      </span>
    </div>
  );
}

export default Detail;

const OverviewPane = () => (
  <div>
    <div className="overview">
      <div className="ptrack-content">
        <div
          className="jawbone-overview-info has-jawbone-nav-transition"
          style={{
            transform: "translateX(0px)",
            opacity: 1,
            transitionDelay: "250ms",
            transitionDuration: "500ms"
          }}
        >
          <div className="meta video-meta ">
            <span className="match-score-wrapper">
              <div className="show-match-score rating-inner">
                <span className="match-score">97% Match</span>
              </div>
            </span>
            <span className="year">2019</span>
            <span className="maturity-rating ">
              <span className="maturity-number">18+</span>
            </span>
            <span className="duration">4 Seasons</span>
          </div>
          <div className="supplemental-message">
            It’s Official: Another Season Is Coming
          </div>
          <div className="video-title"></div>
          <div className="synopsiss">
            Bored with being the Lord of Hell, the devil relocates to Los
            Angeles, where he opens a nightclub and forms a connection with a
            homicide detective.
          </div>
          <div className="jawbone-actions">
            <a className="playLink">
              <span className="nf-icon-button nf-flat-button nf-flat-button-primary nf-flat-button-uppercase">
                <span className="nf-flat-button-icon nf-flat-button-icon-play"></span>
                <span className="nf-flat-button-text">Play</span>
              </span>
            </a>
            <div className="ptrack-content">
              <a
                tabIndex="0"
                className="nf-icon-button nf-flat-button mylist-button nf-flat-button-uppercase"
              >
                <span className="nf-flat-button-icon nf-flat-button-icon-mylist-add"></span>
                <span className="nf-flat-button-text">My List</span>
              </a>
            </div>
            <span className="thumbs-container">
              <div className="thumbs-component thumbs thumbs-horizontal animated unrated updated">
                <div className="nf-svg-button-wrapper thumb-container thumb-up-container">
                  <a tabIndex={0} className="nf-svg-button simpleround">
                    <svg
                      rating="2"
                      className="svg-icon svg-icon-thumb-up"
                      focusable={true}
                    >
                      {Like}
                    </svg>
                  </a>
                </div>
                <div className="nf-svg-button-wrapper thumb-container thumb-down-container">
                  <a tabIndex={0} className="nf-svg-button simpleround">
                    <svg
                      rating="1"
                      className="svg-icon svg-icon-thumb-down"
                      focusable={true}
                    >
                      {Dislike}
                    </svg>
                  </a>
                </div>
              </div>
            </span>
          </div>
          <div className="meta-lists">
            <p className="cast inline-list">
              <span className="list-label">Starring:</span>
              <span className="list-items">
                <a href="/browse/person/30071775">Tom Ellis</a>,{" "}
                <a href="/browse/person/20030510">Lauren German</a>,{" "}
                <a href="/browse/person/20061552">Kevin Alejandro</a>
              </span>
            </p>
            <p className="genres inline-list">
              <span className="list-label">Genres:</span>
              <span className="list-items">
                <a href="/browse/genre/26009">Crime TV Dramas</a>,{" "}
                <a href="/browse/genre/1002031">Fantasy TV Shows</a>,{" "}
                <a href="/browse/genre/2192320">TV Shows Based on Comics</a>
              </span>
            </p>
            <p className="tags inline-list">
              <span className="list-label">This show is:</span>
              <span className="list-items">
                <a href="/browse/genre/100048">Irreverent</a>,{" "}
                <a href="/browse/genre/100041">Exciting</a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="jaw-play-hitzone" role="presentation"></div>
    </div>
  </div>
);

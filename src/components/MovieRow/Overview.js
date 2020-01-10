import React from "react";
import { FILM_DETAILS } from "../../constants";

function Overview({ id }) {
  const {
    score,
    year,
    limit,
    duration,
    message,
    description,
    starring,
    genres,
    isWatching,
    ep,
    epName,
    epLength,
    stop
  } = id && FILM_DETAILS[id];

  return (
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
                  <span className="match-score">{score}</span>
                </div>
              </span>
              <span className="year">{year}</span>
              <span className="maturity-rating ">
                <span className="maturity-number">{limit}</span>
              </span>
              <span className="duration">{duration}</span>
            </div>
            {message && <div className="supplemental-message">{message}</div>}
            <div className="video-title"></div>
            {isWatching && (
              <div class="watched">
                <div class="episodeTitle">
                  <b>
                    <span>
                      <b>{ep}</b> {epName}
                    </span>
                  </b>
                </div>
                <div class="progress ">
                  <span class="progress-bar">
                    <span
                      role="presentation"
                      class="progress-completed"
                      style={{ width: `${(stop * 100) / epLength}%` }}
                    ></span>
                  </span>
                  <span class="summary">
                    {stop} of {epLength}m
                  </span>
                </div>
              </div>
            )}
            <div className="synopsiss">{description}</div>
            <div className="jawbone-actions">
              <a className="playLink" href={`/watch/${id}`}>
                <span className="nf-icon-button nf-flat-button nf-flat-button-primary nf-flat-button-uppercase">
                  <span className="nf-flat-button-icon nf-flat-button-icon-play"></span>
                  <span className="nf-flat-button-text">
                    {isWatching ? "Resume" : "Play"}
                  </span>
                </span>
              </a>
              <div className="ptrack-content">
                <a
                  tabIndex="0"
                  className="nf-icon-button nf-flat-button mylist-button nf-flat-button-uppercase"
                >
                  <span className="nf-flat-button-icon nf-flat-button-icon-mylist-add"></span>
                  <span className="nf-flat-button-text">My Favorites</span>
                </a>
              </div>
            </div>
            <div className="meta-lists">
              <p className="inline-list">
                <span className="list-label">Starring:</span>
                <span className="list-items">
                  {starring &&
                    starring.map(({ id, name }) => (
                      <React.Fragment key={id}>
                        <a href={`/person/${id}`}>{name}</a>,{" "}
                      </React.Fragment>
                    ))}
                </span>
              </p>
              <p className="genres inline-list">
                <span className="list-label">Genres:</span>
                <span className="list-items">
                  {genres &&
                    genres.map(({ href, title }, index) => (
                      <React.Fragment key={index}>
                        <a href={href}>{title}</a>,{" "}
                      </React.Fragment>
                    ))}
                </span>
              </p>
              <p className="tags inline-list">
                <span className="list-label">This show is:</span>
                <span className="list-items">
                  <a href="#">Irreverent</a>, <a href="#">Exciting</a>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="jaw-play-hitzone" role="presentation"></div>
      </div>
    </div>
  );
}

export default Overview;

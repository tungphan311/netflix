import React from "react";
import { Link } from "react-router-dom";
import { FILM_DETAILS } from "../../constants";

function Overview({ id }) {
  const {
    score,
    love,
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
              <div className="watched">
                <div className="episodeTitle">
                  <b>
                    <span>
                      <b>{ep}</b> {epName}
                    </span>
                  </b>
                </div>
                <div className="progress ">
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
            )}
            <div className="synopsiss">{description}</div>
            <div className="jawbone-actions">
              <Link className="playLink" to={`/watch/${id}`}>
                <span className="nf-icon-button nf-flat-button nf-flat-button-primary nf-flat-button-uppercase">
                  <span className="nf-flat-button-icon nf-flat-button-icon-play"></span>
                  <span className="nf-flat-button-text">
                    {isWatching ? "Resume" : "Play"}
                  </span>
                </span>
              </Link>
              <div className="ptrack-content">
                <a
                  tabIndex="0"
                  className="nf-icon-button nf-flat-button mylist-button nf-flat-button-uppercase"
                >
                  {!love ? (
                    <span className="nf-flat-button-icon nf-flat-button-icon-mylist-add"></span>
                  ) : (
                    <span className="nf-flat-button-icon nf-flat-button-icon-mylist-added"></span>
                  )}
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
                        <Link href={`/person/${id}`}>{name}</Link>,{" "}
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
                        <Link to={href}>{title}</Link>,{" "}
                      </React.Fragment>
                    ))}
                </span>
              </p>
              <p className="tags inline-list">
                <span className="list-label">This show is:</span>
                <span className="list-items">
                  <Link to="#">Irreverent</Link>, <Link to="#">Exciting</Link>
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

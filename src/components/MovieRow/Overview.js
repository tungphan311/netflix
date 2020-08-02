import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CERTIFICATES } from "../../constants";
import { actionAddToFavorite } from "../../state/action/user";
import { ADD_TO_FAVORITE } from "../../state/reducers/movieReducer";

function Overview({ id, movieId }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movie.movies);
  const {
    score,
    certification,
    length,
    is_favorite,
    genres,
    overview,
    release_date,
    casts
  } = movies.find(m => m.id === movieId);

  const year = release_date ? release_date.substring(0, 4) : "";

  const cer = CERTIFICATES.find(c => c.certification === certification)
    ? CERTIFICATES.find(c => c.certification === certification)
    : {
        certification: "G",
        meaning: ""
      };

  const handleAddToFavorite = () => {
    setLoading(true);
    dispatch(actionAddToFavorite({ id: movieId })).then(() => {
      dispatch({ type: ADD_TO_FAVORITE, id: movieId });
      setLoading(false);
    });
  };

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
                  <span className="match-score">{score} IMDB</span>
                </div>
              </span>
              <span className="year">{year}</span>
              <span className="maturity-rating ">
                <span className="maturity-number" title={cer.meaning}>
                  {cer.certification}
                </span>
              </span>
              <span className="duration">{length}</span>
            </div>
            {/* {message && <div className="supplemental-message">{message}</div>} */}
            <div className="video-title"></div>
            <div className="synopsiss">{overview}</div>
            <div className="jawbone-actions">
              <Link className="playLink" to={`/watch/${id}`}>
                <span className="nf-icon-button nf-flat-button nf-flat-button-primary nf-flat-button-uppercase">
                  <span className="nf-flat-button-icon nf-flat-button-icon-play"></span>
                  <span className="nf-flat-button-text">Play</span>
                </span>
              </Link>
              <div className="ptrack-content">
                <a
                  tabIndex="0"
                  className="nf-icon-button nf-flat-button mylist-button nf-flat-button-uppercase"
                  onClick={handleAddToFavorite}
                >
                  {!is_favorite ? (
                    <span className="nf-flat-button-icon nf-flat-button-icon-mylist-add"></span>
                  ) : (
                    <span className="nf-flat-button-icon nf-flat-button-icon-mylist-added"></span>
                  )}
                  <span className="nf-flat-button-text">
                    {!loading
                      ? "My Favorites"
                      : is_favorite
                      ? "Removing ..."
                      : "Adding ..."}
                  </span>
                </a>
              </div>
            </div>
            <div className="meta-lists">
              <p className="inline-list">
                <span className="list-label">Starring:</span>
                <span className="list-items">
                  {casts &&
                    casts.map(({ id, name }) => (
                      <React.Fragment key={id}>
                        <Link to={`/person/${id}`}>{name}</Link>,{" "}
                      </React.Fragment>
                    ))}
                </span>
              </p>
              <p className="genres inline-list">
                <span className="list-label">Genres:</span>
                <span className="list-items">
                  {genres &&
                    genres.map(({ id, name }, index) => (
                      <React.Fragment key={index}>
                        <Link to={`/genres/${id}`}>{name}</Link>,{" "}
                      </React.Fragment>
                    ))}
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

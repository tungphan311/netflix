import React, { useState, useEffect } from "react";
import "./Details.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toastErr } from "../../utils/toast";
import { api_key, base_url, image_url } from "../../utils/fetch";
import Rating from "../../components/Rating/Rating";
import { actionGetMovieById } from "../../state/action/movies";
import { formatRuntime } from "../../utils/utils";

function Details(props) {
  // state
  const [film, setFilm] = useState({});
  const [rating, setRating] = useState({});
  const [isFetch, setFetch] = useState(false);
  const [credits, setCredits] = useState({});
  const [hover, setHover] = useState(false);

  const {
    match: {
      params: { id }
    }
  } = props;

  // lifecycle
  const dispatch = useDispatch();
  if (!isFetch) {
    dispatch(actionGetMovieById({ id })).then(res => {
      setRating(res);
      setFetch(true);
    });
  }

  useEffect(() => {
    fetch(`${base_url}/movie/${id}?api_key=${api_key}`)
      .then(res => res.json())
      .then(data => setFilm(data))
      .catch(err => toastErr(err));

    fetch(`${base_url}/movie/${id}/credits?api_key=${api_key}`)
      .then(res => res.json())
      .then(data => setCredits(data))
      .catch(err => toastErr(err));
  }, [id]);

  const {
    backdrop_path,
    poster_path,
    popularity,
    title,
    release_date,
    original_title,
    runtime,
    overview: description,
    genres
  } = film;

  const year = release_date ? release_date.substring(0, 4) : "";
  const score = popularity ? popularity.toFixed(1) : 0;
  const duration = runtime ? formatRuntime(runtime) : 0;

  const director = credits.crew
    ? credits.crew.find(x => x.department === "Directing")
    : {};

  const writers = credits.crew
    ? credits.crew.filter(x => x.department === "Writing")
    : [];

  const casts = credits.cast ? credits.cast.slice(0, 3) : [];

  return (
    <div className="details-page__container">
      <div className="header"></div>
      <div className="jawBoneContainer slider-hover-trigger-layer">
        <div className="background">
          <div className="jawBoneBackground image-rotator">
            <span>
              <div className="ptrack-content">
                {backdrop_path && (
                  <div
                    className="image-rotator-image "
                    style={{
                      backgroundImage: `url('${image_url + backdrop_path}')`,
                      zIndex: 2,
                      opacity: 1,
                      transitionDuration: "750ms"
                    }}
                  ></div>
                )}
              </div>
            </span>
            <div className="background-blur"></div>
          </div>
          <div className="vignette">
            {poster_path && (
              <div
                className="background-poster"
                style={{
                  backgroundImage: `url('${image_url + poster_path}')`
                }}
              ></div>
            )}
          </div>
        </div>
        <div className="jawBone">
          <div className="title-block">
            <div className="title-bar-wrapper">
              <Rating movie_rate={rating} id={id} />
              <div className="title-bar">
                <div
                  className="primary-ribbon"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <div style={{ position: "relative" }}>
                    <div
                      className="wl-ribbon not-inWL"
                      title="Click to add to my favorite"
                    ></div>
                  </div>
                  <div
                    className="ribbon-dropdown"
                    style={{ display: hover ? "block" : "none" }}
                  >
                    <div className="drop-item">
                      <Link to="/my-favorites">
                        <span className="drop-item-text">
                          View my favorites »
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="title-wrapper">
                  <h1>
                    {title}&nbsp;
                    <span id="titleYear">
                      (<a href="/year/2014/?ref_=tt_ov_inf">{year}</a>)
                    </span>
                  </h1>
                  <div className="originalTitle">
                    {original_title}
                    <span className="description"> (original title)</span>
                  </div>
                  <div className="meta video-meta ">
                    <span className="match-score-wrapper">
                      <div className="show-match-score rating-inner">
                        <span className="match-score">{score} IMDB</span>
                      </div>
                    </span>
                    <span className="ghost">|</span>
                    <span className="year">{year}</span>
                    <span className="ghost">|</span>
                    <span className="duration">{duration}</span>
                    <span className="ghost">|</span>
                    <span className="maturity-rating ">
                      <span className="maturity-number">18+</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overview">
            <div className="summary-text">{description}</div>
            <div className="credit-summary-item">
              <h4 className="inline">Director: </h4>
              <Link to={`/person/${director.id}`}>{director.name}</Link>
            </div>
            <div className="credit-summary-item">
              <h4 className="inline">Writers: </h4>
              {writers.map(({ id, name }, index) => (
                <React.Fragment key={index}>
                  <Link to={`/person/${id}`}>{name}</Link>
                  {index < writers.length - 1 && ", "}
                </React.Fragment>
              ))}
            </div>
            <div className="credit-summary-item">
              <h4 className="inline">Stars: </h4>
              {casts.map(({ id, name }, index) => (
                <React.Fragment key={index}>
                  <Link to={`/person/${id}`}>{name}</Link>
                  {index < casts.length - 1 && ", "}
                </React.Fragment>
              ))}
            </div>
            <div className="credit-summary-item">
              <h4 className="inline">Genres: </h4>
              {genres &&
                genres.map(({ id, name }, index) => (
                  <React.Fragment key={index}>
                    <Link to={`/genres/${id}`}>{name}</Link>
                    {index < genres.length - 1 && ", "}
                  </React.Fragment>
                ))}
            </div>
          </div>
          <div className="btn-add-wrapper">
            <button
              tabIndex="0"
              className="nf-icon-button nf-flat-button nf-flat-button-primary nf-flat-button-uppercase"
            >
              <span className="nf-flat-button-icon nf-flat-button-icon-mylist-add"></span>
              <span className="nf-flat-button-text">Add to My Favorites</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

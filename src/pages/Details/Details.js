import React, { useState, useEffect } from "react";
import "./Details.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toastErr } from "../../utils/toast";
import { api_key, base_url, image_url } from "../../utils/fetch";
import Rating from "../../components/Rating/Rating";
import {
  actionGetMovieById,
  actionReviewMovie
} from "../../state/action/movies";
import { formatRuntime } from "../../utils/utils";
import { actionAddToFavorite } from "../../state/action/user";
import { Done } from "../../utils/svg";
import { CERTIFICATES } from "../../constants";
import Card from "../../components/Card/Card";
import Review from "../../components/Review/Review";
import ReviewModal from "../../components/Modals/Review";

function Details(props) {
  // state
  const [film, setFilm] = useState({});
  const [release, setRelease] = useState({});

  const [credits, setCredits] = useState({});
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFavorite, setFavorite] = useState(false);

  const [review, setReview] = useState(false);

  const {
    match: {
      params: { id }
    }
  } = props;

  // lifecycle
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetMovieById({ id })).then(result => {
      setFilm(result);
      setFavorite(result.is_favorite);
    });
  }, [dispatch, id]);

  const {
    backdrop_path,
    poster_path,
    score,
    name: title,
    release_date,
    length: runtime,
    overview: description,
    genres,
    tagline,
    certification,
    rating,
    total_rating,
    user_rate,
    director = {},
    writers = [],
    casts: cast_list
  } = film;

  const movie_rate = { rating, total_rating, user_rate };

  const cer = certification
    ? CERTIFICATES.find(c => c.certification === certification)
    : {
        certification: "G",
        meaning: ""
      };

  const year = release_date ? release_date.substring(0, 4) : "";

  const casts = cast_list ? cast_list.slice(0, 3) : [];

  const handleAddToFavorite = () => {
    setLoading(true);
    dispatch(actionAddToFavorite({ id })).then(() => {
      setLoading(false);
      setFavorite(!isFavorite);
    });
  };

  const handleClose = () => setReview(false);

  const handleSubmit = () => {
    dispatch(actionReviewMovie({ id })).then(() => handleClose());
  };

  return (
    <div className="details-page__container">
      <div className="header"></div>
      <div id="content-2-wide">
        <div className="title-overview">
          <div className="vital">
            <div className="title-block">
              <div className="title-bar-wrapper">
                <Rating movie_rate={movie_rate} id={id} />
                <div className="title-bar">
                  <div
                    className="primary-ribbon"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    <div style={{ position: "relative" }}>
                      <div
                        className={`wl-ribbon ${
                          isFavorite ? "inWL" : "not-inWL"
                        } ${loading ? "spinner" : ""}`}
                        title={
                          isFavorite
                            ? "Already in my favorite"
                            : "Not in my favorite yet"
                        }
                        onClick={handleAddToFavorite}
                      >
                        {loading && <div className="loader"></div>}
                      </div>
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
                        (<Link to={`/year/${year}`}>{year}</Link>)
                      </span>
                    </h1>
                    <div className="meta video-meta ">
                      <span className="match-score-wrapper">
                        <div className="show-match-score rating-inner">
                          <span className="match-score">{score} IMDB</span>
                        </div>
                      </span>
                      <span className="ghost">|</span>
                      <span className="year">{release_date}</span>
                      <span className="ghost">|</span>
                      <span className="duration">{runtime}</span>
                      <span className="ghost">|</span>
                      <span className="maturity-rating ">
                        <a className="maturity-number" title={cer.meaning}>
                          {cer.certification}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="background">
              <div className="jawBoneBackground image-rotator">
                <span>
                  <div className="ptrack-content">
                    {backdrop_path && (
                      <div
                        className="image-rotator-image "
                        style={{
                          backgroundImage: `url('${image_url +
                            backdrop_path}')`,
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
          </div>
          <div className="summary-wrapper">
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
              <div className="credit-summary-item">
                <h4 className="inline">Tagline: </h4>
                <h4 className="inline">{tagline}</h4>
              </div>
            </div>
            <div className="btn-add-wrapper">
              <button
                tabIndex="0"
                className="nf-icon-button nf-flat-button nf-flat-button-primary nf-flat-button-uppercase"
                onClick={handleAddToFavorite}
              >
                {isFavorite ? (
                  <>
                    <div className="medium-icon">
                      <Done />
                    </div>
                    <span className="nf-flat-button-text">
                      {loading ? "Removing ..." : "Remove from My Favorites"}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="nf-flat-button-icon nf-flat-button-icon-mylist-add"></span>
                    <span className="nf-flat-button-text">
                      {loading ? "Adding ..." : "Add to My Favorites"}
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="right-side"></div>
        <div className="details-more__wrapper left-side">
          <Card title="User Reviews">
            <Review></Review>
            <a onClick={() => setReview(true)}>Review this title</a>
            <span> | </span>
            <a>See all 3.950 reviews</a>
          </Card>
        </div>

        <ReviewModal
          show={review}
          handleClose={handleClose}
          poster={image_url + poster_path}
          title={title}
          year={year}
          duration={runtime}
          certification={cer}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Details;

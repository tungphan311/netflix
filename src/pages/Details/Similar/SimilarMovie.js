import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SimilarMovie.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { actionGetSimilarMovies } from "../../../state/action/movies";

const DEFAULT = new Array(5).fill({});

function SimilarMovie({ id }) {
  const [movies, setMovies] = useState(DEFAULT);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetSimilarMovies({ id })).then(res => setMovies(res));
  }, [dispatch, id]);

  return (
    <div className="mini-article">
      <div>
        <h3>More Like This</h3>
        <p>Similar to this movie that you may like</p>
        {movies.map((movie, index) => (
          <Movie {...movie} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default SimilarMovie;

const Movie = ({
  id,
  title,
  img,
  rating,
  certification,
  overview,
  genres,
  index
}) => (
  <SkeletonTheme highlightColor="#444">
    <div className={`list-preview ${index % 2 === 0 ? "odd" : "even"}`}>
      <div className="list-preview-item-narrow">
        {img ? (
          <Link to={`/title/${id}`}>
            <img src={img} alt="movie's poster" />
          </Link>
        ) : (
          <Skeleton duration={2} height="100%" />
        )}
      </div>
      <div className="list_info">
        <div className="list_name">
          <strong>
            {title ? (
              <Link to={`/title/${id}`}>{title}</Link>
            ) : (
              <Skeleton duration={2} />
            )}
          </strong>
        </div>
        <div className="list_meta">
          {genres ? (
            <>
              <span className="maturity-rating ">
                <a className="maturity-number">{certification || "PG"}</a>
              </span>
              {genres.map((genre, index) => (
                <React.Fragment key={index}>
                  <span>{genre}</span>
                  {index < genres.length - 1 && (
                    <span className="ghost">|</span>
                  )}
                </React.Fragment>
              ))}
            </>
          ) : (
            <Skeleton duration={2} />
          )}

          {rating ? (
            <span className="ratingPlugin">
              <Link to="/">
                <img alt="logo" src="/logo_header.png" />
              </Link>
              <span className="list_rating">
                {rating}
                <span className="ofTen">/5</span>
              </span>
              <img
                src="https://m.media-amazon.com/images/G/01/imdb/images/plugins/imdb_star_22x21-2889147855._CB466680980_.png"
                className="star"
                alt="star"
              ></img>
            </span>
          ) : (
            <Skeleton duration={2} />
          )}

          <div className="list_overview">
            {overview || <Skeleton duration={2} height={60} />}
          </div>
        </div>
      </div>
    </div>
  </SkeletonTheme>
);

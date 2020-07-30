import React, { useState, useEffect } from "react";
import "./Rating.scss";
import { useDispatch } from "react-redux";
import OutsideClickWrapper from "../OutsideClickWrapper/OutsideClickWrapper";
import { actionRateMovie, deleteMovieRating } from "../../state/action/movies";

function Rating({ movie_rate, id, setUserRate }) {
  // state
  const { rating, total_rating, user_rate } = movie_rate;
  const [show, setShow] = useState(false);
  const [rate, setRating] = useState(user_rate);
  const [tempRating, setTempRating] = useState(rate);

  useEffect(() => {
    setRating(user_rate);
    setTempRating(user_rate);
  }, [user_rate]);

  // redux
  const dispatch = useDispatch();

  const handleSetRating = e => {
    setRating(e.target.name);
  };

  const handleDeleteRating = () => {
    dispatch(deleteMovieRating({ id }));
    setRating(0);
    setUserRate(0);
    setShow(false);
  };

  const handleRatedMove = rated => {
    dispatch(actionRateMovie({ id, rated }));
    setRating(rated);
    setUserRate(rated);
    setTempRating(rated);
    setShow(false);
  };

  return (
    <div className="rating-wrapper">
      <div className="rating">
        <div className="rating-value">
          <strong>
            <span>{rating}</span>
            <span className="grey">/</span>
            <span className="grey">5</span>
          </strong>
        </div>
        <a title={`${total_rating} users already rated this movie`}>
          {total_rating}
        </a>
      </div>
      <div className="rating-widget">
        <OutsideClickWrapper
          onClickOutside={() => {
            setRating(tempRating);
            setShow(false);
          }}
          isShowing={show}
        >
          <div className={`rating-button ${show ? "open" : ""}`}>
            <button onClick={() => setShow(true)}>
              <span className={`rating ${rate ? "rated" : "no-rating"}`}></span>
              {!rate ? (
                <span className="rating-text">Rate this</span>
              ) : (
                <>
                  <span className="star-rating-value">{rate}</span>
                  <span className="star-rating-subtext">You</span>
                </>
              )}
            </button>
            <div className="star-rating">
              <span>
                <a
                  className="star-rating-delete"
                  title="Delete"
                  onClick={handleDeleteRating}
                />
                <span className="star-rating-stars">
                  {[1, 2, 3, 4, 5].map(id => (
                    <Star
                      key={id}
                      rating={rate}
                      id={id}
                      handleSetRating={handleSetRating}
                      setRating={setRating}
                      handleRatedMove={handleRatedMove}
                      tempRating={tempRating}
                    />
                  ))}
                </span>
              </span>
            </div>
          </div>
        </OutsideClickWrapper>
      </div>
    </div>
  );
}

export default Rating;

export const Star = ({ rating, id, handleSetRating, handleRatedMove }) => (
  <a
    className={rating >= id ? "on" : ""}
    title={`Click to rate: ${id}`}
    name={id}
    onMouseEnter={e => handleSetRating(e)}
    // onMouseLeave={() => setRating(tempRating)}
    onClick={() => handleRatedMove(id)}
  >
    <span>{id}</span>
  </a>
);

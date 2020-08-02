import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./Review.scss";
import { useDispatch } from "react-redux";
import ReviewForm from "../Forms/Review/Review";
import { actionGetUserReview } from "../../state/action/movies";

function ReviewModal({
  show,
  handleClose,
  userRate,
  poster,
  title,
  year,
  certification,
  duration,
  handleSubmit,
  id
}) {
  const [rating, setRating] = useState(userRate);
  const [temp, setTemp] = useState(userRate);

  const [review, setReview] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    setRating(userRate);
    setTemp(userRate);
  }, [dispatch, userRate]);

  const resetRating = () => {
    setRating(temp);
  };

  const onShow = () => {
    dispatch(actionGetUserReview({ id })).then(res => setReview(res));
  };

  const onHide = () => {
    setRating(userRate);
    setTemp(userRate);

    handleClose();
  };

  const onSubmit = () => {
    handleSubmit(rating);
  };

  return (
    <Modal show={show} onHide={onHide} onEntering={onShow} backdrop="static">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="film-meta--wrapper">
          <div className="film-meta d-flex">
            <div className="film--poster">
              <img src={poster} className="film--poster-image" alt="poster" />
            </div>
            <div className="film--info">
              <div>
                <span className="a-large-size">{title}</span>
                <span>{`  (${year})`}</span>
              </div>
              <hr />
              <div>
                <span>{duration}</span>
                <span className="m__hor--5"> | </span>
                <span className="maturity-rating ">
                  <span className="maturity-number">
                    {certification.certification}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <hr className="divider--line" />
        </div>
        <Title title="YOUR RATING" />
        <div className="star-rating-wrapper">
          <div className="star-bar">
            <div className="star-bar-flex">
              {[1, 2, 3, 4, 5].map(id => (
                <Star
                  key={id}
                  id={id}
                  setRating={setRating}
                  setTemp={setTemp}
                  rating={rating}
                  resetRating={resetRating}
                />
              ))}
              <span className="ice-star-bar-rating">{rating}</span>
            </div>
          </div>
        </div>
        <Title title="YOUR REVIEW" />
        <ReviewForm onSubmit={onSubmit} {...review} />
      </Modal.Body>
    </Modal>
  );
}

export default ReviewModal;

const Title = ({ title }) => (
  <div className="title--heading">
    <h3 className="title--text">{title}</h3>
  </div>
);

const Star = ({ rating, id, setRating, resetRating, setTemp }) => (
  <a
    className="ice-star-wrapper"
    href="#"
    id={id}
    onMouseEnter={e => setRating(e.target.id)}
    onMouseLeave={resetRating}
    onClick={e => {
      setRating(e.target.id);
      setTemp(e.target.id);
    }}
  >
    <svg
      className="ice-star ice-star-filled"
      fill={rating >= id ? "#4268f1" : "#ccc"}
      height="24"
      viewBox="0 0 24 24"
      width="24"
      id={id}
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
      <path d="M0 0h24v24H0z" fill="none"></path>
    </svg>
  </a>
);

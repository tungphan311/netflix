import React from "react";
import { Modal } from "react-bootstrap";
import "./Review.scss";
import ReviewForm from "../Forms/Review/Review";

function ReviewModal({
  show,
  handleClose,
  poster,
  title,
  year,
  certification,
  duration,
  handleSubmit
}) {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
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
        <Title title="YOUR REVIEW" />
        <ReviewForm onSubmit={handleSubmit} />
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

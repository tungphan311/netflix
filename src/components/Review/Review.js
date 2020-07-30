import React from "react";
import "./Review.scss";
import { Link } from "react-router-dom";
import { Star } from "../../utils/svg";
import { formatDate } from "../../utils/datetime";

function Review({ headline, body, timestamp, rating, user }) {
  return (
    <div className="user-review">
      <div className="review-rating">
        <span>
          <Star />
          <span style={{ marginLeft: "6px" }}>{rating}</span>
          <span className="point-scale">/5</span>
        </span>
      </div>
      <span>
        <strong>{headline}</strong>
        <div className="review-meta">
          <span>{formatDate(new Date(timestamp))}</span>
          <span> | by </span>
          <span className="text--green">{user}</span>
          {/* <span> - </span> */}
          {/* <Link to="/user/1/reviews">See all my reviews</Link> */}
        </div>
        <div>
          <p style={{ textAlign: "justify" }}>{body}</p>
        </div>
      </span>
      <hr />
      {/* <div className="reaction text-muted">
        <span>
          938 of 1.063 people found this review helpful. Was this review helpful
          to you?
        </span>
        <button className="btn-small m__l--10">Yes</button>
        <button className="btn-small m__l--5">No</button>
      </div> */}
    </div>
  );
}

export default Review;

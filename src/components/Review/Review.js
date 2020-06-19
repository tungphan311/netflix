import React from "react";
import "./Review.scss";
import { Link } from "react-router-dom";
import { Star } from "../../utils/svg";

function Review() {
  return (
    <div className="user-review">
      <div className="review-rating">
        <span>
          <Star />
          <span style={{ marginLeft: "6px" }}>4</span>
          <span className="point-scale">/5</span>
        </span>
      </div>
      <span>
        <strong>A Visually Monumental And Thoughtful Sci-Fi Epic</strong>
        <div className="review-meta">
          <span>8 November 2014</span>
          <span> | by </span>
          <span className="text--green">CalRhys</span>
          <span> - </span>
          <Link to="/user/1/reviews">See all my reviews</Link>
        </div>
        <div>
          <p style={{ textAlign: "justify" }}>
            I was extremely lucky to get the chance to see this film upon its
            first day release, before entering the cinema, my expectations were
            already high, after all, this was a film from the cinematic genius
            who brought us the likes of 'Inception' and 'The Dark Knight', to
            summarise the following review in a single sentence: I left the
            cinema in extreme awe from the visual masterpiece I had just viewed.
            A film that explores the psychological and emotional state of a man
            whose life revolves around his family, 'Interstellar' is a thrilling
            and thought-provoking film that boasts an intellectual story
            masterfully written by the Nolan brothers. Whilst there seems to
            have been influence from films like '2001: A Space Odyssey' and
            'Apollo 13', 'Interstellar' is unique in its own way. Whilst the
            subject may be hard to comprehend at times, it can't be denied how
            visually monumental and thoughtful Christopher Nolan's epic science
            fiction masterpiece is, and can easily be named the best film of
            this year and possibly one of the greatest science fiction films to
            have ever graced the screen. A sheer brilliant feat of cinema.
          </p>
        </div>
      </span>
      <hr />
      <div className="reaction text-muted">
        <span>
          938 of 1.063 people found this review helpful. Was this review helpful
          to you?
        </span>
        <button className="btn-small m__l--10">Yes</button>
        <button className="btn-small m__l--5">No</button>
      </div>
    </div>
  );
}

export default Review;

import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import SimilarMovie from "../Details/Similar/SimilarMovie";
import "./Review.scss";
import { Plus, Loader } from "../../components/Svg";
import Review from "../../components/Review/Review";
import {
  actionGetMovieReview,
  actionReviewMovie
} from "../../state/action/movies";
import ReviewModal from "../../components/Modals/Review";
import { CERTIFICATES } from "../../constants";

function ReviewPage({
  match: {
    params: { id }
  }
}) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [userRate, setUserRate] = useState(0);
  const [poster, setPoster] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(2000);
  const [runtime, setRuntime] = useState("");
  const [cer, setCer] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetMovieReview({ id, page })).then(
      ({
        total,
        has_more,
        list: reviews,
        user_rate,
        avatar,
        title,
        release_date,
        runtime: length,
        certification
      }) => {
        let newList = [...list];
        for (let review of reviews) {
          const index = list.findIndex(r => _.isEqual(r, review));

          if (index < 0) {
            newList = [...newList, review];
          }
        }
        setList(newList);

        setTotal(total);
        setHasMore(has_more);

        const newYear = release_date ? release_date.substring(0, 4) : "";

        setUserRate(user_rate);
        setPoster(avatar);
        setTitle(title);
        setYear(newYear);
        setRuntime(length);

        const certi = CERTIFICATES.find(c => c.certification === certification)
          ? CERTIFICATES.find(c => c.certification === certification)
          : {
              certification: "G",
              meaning: ""
            };
        setCer(certi);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, hasMore, id, page]);

  const handleLoadMore = () => {
    setLoading(!loading);
    setPage(page + 1);
  };

  const handleClose = () => setShow(false);

  const handleSubmit = rated => {
    dispatch(actionReviewMovie({ id, rated })).then(() => handleClose());
  };

  return (
    <div className="details-page__container review">
      <div className="header"></div>
      <div id="content-2-wide" style={{ paddingTop: "20px" }}>
        <div id="main">
          <section className="article">
            <div className="subpage_title_block">
              <Link to={`/title/${id}`}>
                <img
                  itemProp="image"
                  className="poster"
                  height="98"
                  width="67"
                  alt="Poster"
                  src={poster}
                ></img>
              </Link>
              <div className="subpage_title_block__right-column">
                <div className="parent">
                  <h3>
                    <Link to={`/title/${id}`}>{title}</Link>
                  </h3>
                </div>
                <h1 className="review-header">User Reviews</h1>
                <a
                  role="button"
                  onClick={() => setShow(true)}
                  className="ipl-icon-link ipl-icon-link--block user-reviews"
                >
                  <span className="ipl-icon-link__icon">{Plus}</span>
                  Review this title
                </a>
              </div>
            </div>
            <div className="lister">
              <div className="lister-list">
                {list.map((review, index) => (
                  <Review {...review} key={index} />
                ))}
              </div>
            </div>
            {hasMore && (
              <div onClick={handleLoadMore}>
                <div
                  className={`ipl-load-more ${
                    loading ? "ipl-load-more--loading" : "ipl-load-more--loaded"
                  }`}
                >
                  <div className="ipl-load-more__load-indicator">{Loader}</div>
                  <button className="ipl-load-more__button">Load more</button>
                </div>
              </div>
            )}
          </section>
        </div>
        <div className="right-side">
          <SimilarMovie id={id} />
        </div>
      </div>

      <ReviewModal
        show={show}
        userRate={userRate}
        handleClose={handleClose}
        poster={poster}
        title={title}
        year={year}
        duration={runtime}
        certification={cer}
        handleSubmit={handleSubmit}
        id={id}
      />
    </div>
  );
}

export default ReviewPage;

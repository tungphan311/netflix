import React from "react";
import "./ShowDetail.scss";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CERTIFICATES } from "../../constants";

function ShowDetail({ id }) {
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
  } = movies.find(m => m.id === id);

  const cer = certification
    ? CERTIFICATES.find(c => c.certification === certification)
    : {
        certification: "G",
        meaning: ""
      };

  return (
    <div className="ptrack-content">
      <div className="simpleSlider slider jawBoneDetails">
        <div className="sliderMask">
          <div className="sliderContent" style={{ paddingLeft: "4%" }}>
            <div className="detailsItem detailsTags">
              <div>
                <h4 className="listLabel">Genres</h4>
                <ul>
                  {genres.map(({ href, title }) => (
                    <li key={href}>
                      <Link to={href}>{title}</Link>
                    </li>
                  ))}
                </ul>
                <h4 className="listLabel">This show is</h4>
                <ul>
                  <li>
                    <Link to="#" onClick={() => false}>
                      Irreverent
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => false}>
                      Exciting
                    </Link>
                  </li>
                </ul>
                <h4 className="listLabel">Maturity Ratings</h4>
                <span className="maturity-rating ">
                  <span className="maturity-number" title={cer.meaning}>
                    {cer.certification}
                  </span>
                </span>
              </div>
            </div>
            <div className="cast-wrapper">
              <h4 className="listLabel" style={{ marginLeft: "4%" }}>
                Casts
              </h4>
              <div className="cast-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDetail;

export const Cast = ({ avatar, character, actor }) => (
  <div className="cast">
    <div
      className="background-image"
      style={{
        backgroundImage: `url('${avatar}')`
      }}
    ></div>
    <div className="cast-name ellipsis">{actor}</div>
    <div className="character ellipsis">As: {character}</div>
  </div>
);

export const splitList = (list, width) => {
  const item = width < 800 ? 2 : width >= 800 && width < 1100 ? 4 : 5;

  let temp = [];
  let newList = [];

  list.map((sub, index) => {
    temp = [...temp, sub];

    if (index % item === item - 1) {
      newList = [...newList, temp];
      temp = [];
    }

    if (index === list.length - 1) {
      newList = [...newList, temp];
    }

    return null;
  });

  return newList;
};

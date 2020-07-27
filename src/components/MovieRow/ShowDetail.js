import React from "react";
import "./ShowDetail.scss";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FILM_DETAILS } from "../../constants";

function ShowDetail({ id, width }) {
  const { genres, limit, casts } = id && FILM_DETAILS[id];

  const list = casts && splitList(casts, width);

  if (!genres || !limit) return null;

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
                  <Link
                    to="https://help.netflix.com/support/2064"
                    className="maturity-number"
                  >
                    {limit}
                  </Link>
                  <p className="maturityDescription">
                    {`Recommended for ages ${limit}`}
                  </p>
                </span>
              </div>
            </div>
            <div className="cast-wrapper">
              <h4 className="listLabel" style={{ marginLeft: "4%" }}>
                Casts
              </h4>
              <div className="cast-container">
                <Carousel interval={null}>
                  {list.map((sub, index) => (
                    <Carousel.Item key={index}>
                      {sub.map(({ avatar, character, actor }) => (
                        <Cast
                          key={actor}
                          avatar={avatar}
                          character={character}
                          actor={actor}
                        />
                      ))}
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
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

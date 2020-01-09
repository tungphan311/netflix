import React from "react";
import "./ShowDetail.scss";
import { Carousel } from "react-bootstrap";
import { FILM_DETAILS } from "../../constants";

function ShowDetail({ id }) {
  const { genres, limit, casts } = id && FILM_DETAILS[id];

  const list = casts && splitList(casts);

  if (!genres || !limit) return null;

  return (
    <div className="ptrack-content">
      <div className="simpleSlider slider jawBoneDetails">
        <div className="sliderMask">
          <div className="sliderContent">
            <div class="detailsItem detailsTags">
              <div>
                <h4 class="listLabel">Genres</h4>
                <ul>
                  {genres.map(({ href, title }) => (
                    <li key={href}>
                      <a href={href}>{title}</a>
                    </li>
                  ))}
                </ul>
                <h4 class="listLabel">This show is</h4>
                <ul>
                  <li>
                    <a href="#" onClick={() => false}>
                      Irreverent
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => false}>
                      Exciting
                    </a>
                  </li>
                </ul>
                <h4 class="listLabel">Maturity Ratings</h4>
                <span class="maturity-rating ">
                  <a
                    href="https://help.netflix.com/support/2064"
                    class="maturity-number"
                  >
                    {limit}
                  </a>
                  <p class="maturityDescription">
                    {`Recommended for ages ${limit}`}
                  </p>
                </span>
              </div>
            </div>
            <div className="cast-wrapper">
              <h4 class="listLabel" style={{ marginLeft: "4%" }}>
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

const Cast = ({ avatar, character, actor }) => (
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

const splitList = list => {
  const item = 5;

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

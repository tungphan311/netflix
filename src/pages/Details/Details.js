/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import { FILM_DETAILS } from "../../constants";
import "./Details.scss";

const getDetailsById = id => FILM_DETAILS[id];

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      film: {}
    };
  }

  componentDidMount() {
    this.setState({ film: getDetailsById(1) });
  }
  render() {
    const { film } = this.state;
    const displayActors = film.casts ? film.casts.slice(0, 4) : null;
    return (
      <div className="details-page__container">
        <div
          className="details-page__hero-container"
          style={{ backgroundImage: `url(${film.backgroundPath})` }}
        >
          <div className="details-page__info-container">
            <img
              className="details-page__logo"
              src={film.logoPath}
              alt={film.title}
            />
            <div className="details-page__description">{film.description}</div>
          </div>
          {film.isOut ? (
            <div className="details-page__release-container p__hor--20 p__ver--10">
              <div className="font__size--large font__weight--bold">
                WATCH NOW
              </div>
            </div>
          ) : (
            <div className="details-page__release-container p__hor--20 p__ver--10">
              <div className="font__size--large font__weight--bold">
                RELEASE DATE
              </div>
              <div className="font__size--large">{film.releaseDate}</div>
            </div>
          )}
        </div>
        <div className="details-page__content">
          <div className="details-page__content__left p__hor--40 p__ver--10">
            {film.descriptionItems &&
              film.descriptionItems.map(x => (
                <div className="m__ver--10" key={x.title}>
                  <div className="font__size--large font__weight--bold">
                    {x.title}
                  </div>
                  <div className="font__size--small">{x.content}</div>
                </div>
              ))}
          </div>
          <div className="details-page__content__right p__hor--40 p__ver--10">
            <div className="font__size--large">Cast</div>
            <div className="details-page__cast">
              {displayActors
                ? displayActors.map((cast, index) => (
                    <div key={index} className="details-page__cast__item">
                      <div
                        className="details-page__cast__item__logo w--100"
                        style={{
                          backgroundSize: "cover",
                          backgroundImage: `url(${cast.imagePath})`
                        }}
                      ></div>
                      <div className="font__size--small">
                        Character: {cast.character}
                      </div>
                      <div className="font__size--small">{cast.alias}</div>
                      <div className="font__size--small">
                        Actor: {cast.actor}
                      </div>
                    </div>
                  ))
                : null}
            </div>
            <div className="details-page__cast__viewmore font__size--large font__weight--bold">
              View more actor
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;

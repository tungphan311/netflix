/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { FILM_DETAILS } from "../../constants";
import "./Details.scss";
import { Cast, splitList } from "../../components/MovieRow/ShowDetail";
import { Episode } from "../../components/MovieRow/Episode";

const getDetailsById = id => FILM_DETAILS[id];

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      film: {},
      width: 0
    };
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    const width = window.innerWidth;
    this.setState({ width });
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.setState({ film: getDetailsById(1) });
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const film = FILM_DETAILS[id];
    this.setState({ film });
  }

  render() {
    const { film, width } = this.state;

    const {
      background,
      logo,
      score,
      year,
      limit,
      duration,
      description,
      genres,
      casts,
      episode,
      seasons
    } = film;

    const list = casts && splitList(casts);

    return (
      <div className="details-page__container">
        <div className="header"></div>
        <div className="jawBoneContainer slider-hover-trigger-layer">
          <div className="background">
            <div className="jawBoneBackground image-rotator">
              <span>
                <div className="ptrack-content">
                  <div
                    className="image-rotator-image "
                    style={{
                      backgroundImage: `url('${background}')`,
                      zIndex: 2,
                      opacity: 1,
                      transitionDuration: "750ms"
                    }}
                  ></div>
                </div>
              </span>
            </div>
            <div className="vignette"></div>
          </div>
          <div className="jawBone">
            <h1>
              <a className="jawbone-title-link active" href="/title/80180171">
                <div className="title has-jawbone-nav-transition original">
                  <img alt="Logo" className="logo" src={logo} />
                </div>
              </a>
            </h1>
            <div className="jawBoneCommon">
              <div className="jawBonePanes">
                <div className="jawBonePane">
                  <div className="ptrack-container">
                    <div>
                      <div className="overview">
                        <div className="ptrack-container">
                          <div className="jawbone-overview-info has-jawbone-nav-transition">
                            <div className="meta video-meta ">
                              <span className="match-score-wrapper">
                                <div className="show-match-score rating-inner">
                                  <span className="match-score">{score}</span>
                                </div>
                              </span>
                              <span className="year">{year}</span>
                              <span className="duration">{duration}</span>
                            </div>
                            <div className="jawbone-actions">
                              <a className="playLink">
                                <span
                                  tabIndex="-1"
                                  className="nf-icon-button nf-flat-button nf-flat-button-primary nf-flat-button-uppercase"
                                >
                                  <span className="nf-flat-button-icon nf-flat-button-icon-play"></span>
                                  <span className="nf-flat-button-text">
                                    Play
                                  </span>
                                </span>
                              </a>
                              <div className="ptrack-content">
                                <a
                                  tabIndex="0"
                                  className="nf-icon-button nf-flat-button mylist-button nf-flat-button-uppercase"
                                >
                                  <span className="nf-flat-button-icon nf-flat-button-icon-mylist-add"></span>
                                  <span className="nf-flat-button-text">
                                    My Favorites
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className="synopsis">{description}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail__container">
          <div className="detailsItem detailsTags">
            <div>
              <h4 className="listLabel">Genres</h4>
              <ul>
                {genres &&
                  genres.map(({ href, title }) => (
                    <li key={href}>
                      <a href={href}>{title}</a>
                    </li>
                  ))}
              </ul>
              <h4 className="listLabel">This show is</h4>
              <ul>
                <li>
                  <a href="#">Irreverent</a>
                </li>
                <li>
                  <a href="#">Exciting</a>
                </li>
              </ul>
              <h4 className="listLabel">Maturity Ratings</h4>
              <span className="maturity-rating ">
                <a
                  href="https://help.netflix.com/support/2064"
                  className="maturity-number"
                >
                  {limit}
                </a>
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
                {list &&
                  list.map((sub, index) => (
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

        {seasons &&
          seasons.map(({ id, title }) => {
            const lists = episode && splitLists(width, episode[id]);

            return (
              <div className="episodes-container" key={id}>
                <div className="ptrack-content">
                  <div className="single-season-label">{title}</div>
                  <div className="episodeWrapper">
                    <div className="ptrack-container">
                      <div className="slider">
                        <div
                          className="sliderMask"
                          style={{ marginRight: "-30px", overflow: "hidden" }}
                        >
                          <div className="sliderContent row-with-x-columns">
                            <Carousel
                              interval={null}
                              // onSelect={this.handleSelect}
                              prevIcon={
                                <span
                                  className="handle handlePrev active"
                                  tabIndex="0"
                                  role="button"
                                >
                                  <b className="indicator-icon icon-leftCaret"></b>
                                </span>
                              }
                              nextIcon={
                                <span
                                  className="handle handleNext active"
                                  tabIndex="0"
                                  role="button"
                                >
                                  <b className="indicator-icon icon-rightCaret"></b>
                                </span>
                              }
                            >
                              {lists &&
                                lists.map((sub, index) => (
                                  <Carousel.Item key={index}>
                                    {sub.map(
                                      ({
                                        href,
                                        title,
                                        ep,
                                        length,
                                        description,
                                        background
                                      }) => (
                                        <Episode
                                          key={href}
                                          href={href}
                                          title={title}
                                          ep={ep}
                                          length={length}
                                          description={description}
                                          background={background}
                                        />
                                      )
                                    )}
                                  </Carousel.Item>
                                ))}
                            </Carousel>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Details;

const splitLists = (width, list) => {
  const item =
    width < 500
      ? 1
      : width >= 500 && width < 800
      ? 2
      : width >= 800 && width < 1100
      ? 3
      : width >= 1100 && width < 1400
      ? 4
      : 5;

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

import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { FILM_DETAILS } from "../../constants";

export const Episode = ({
  href,
  title,
  ep,
  length,
  description,
  background,
  progress
}) => (
  <div className="slider-item">
    <div className="episodeLockup">
      <div className="ptrack-content">
        <div
          className="episodeArt video-artwork"
          style={{
            backgroundImage: `url('${background}')`
          }}
        >
          <div className="numberVignette"></div>
          <div className={`episodeNumber ${progress ? "" : "noProgress"}`}>
            <span aria-hidden="true">{ep}</span>
          </div>
          {progress && (
            <div class="progress">
              <span class="progress-bar">
                <span
                  role="presentation"
                  class="progress-completed"
                  style={{ width: "47%" }}
                ></span>
              </span>
            </div>
          )}
          <a className="episodePlay slider-refocus playLink" href={href}>
            <div className="playRing">
              <div className="play icon-play"></div>
            </div>
          </a>
        </div>
        <div className="episodeTitle">
          <p className="ellipsized">{title}</p>
          <span className="duration">{length}</span>
        </div>
        <div className="episodeSynopsis">{description}</div>
      </div>
    </div>
  </div>
);

function EpisodeContainer({ id, width }) {
  const { episode, seasons } = id && FILM_DETAILS[id];

  const [open, setOpen] = useState(false);
  const [season, setSeason] = useState(1);

  const handleSelect = season => {
    setSeason(season);
    setOpen(false);
  };

  const list = episode && splitList(width, episode[season]);

  return (
    <div className="episodesContainer">
      <div className="ptrack-content">
        {seasons && seasons.length === 1 ? (
          <div className="single-season-label">Season 1</div>
        ) : (
          <div className="nfDropDown widthRestricted theme-lakira">
            <div className="label" tabIndex="0" onClick={() => setOpen(!open)}>
              {seasons.filter(s => s.id === season)[0].title}
              <span className="arrow"></span>
            </div>
            <div
              className="sub-menu theme-lakira"
              style={
                open ? { display: "block", transitionDuration: "150ms" } : {}
              }
            >
              <ul className="sub-menu-list">
                {seasons.map(({ id, title }) => (
                  <li
                    key={id}
                    className="sub-menu-item"
                    onClick={() => handleSelect(id)}
                  >
                    <a className="sub-menu-link" role="link" tabIndex="0">
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className="episodeWrapper">
          <div className="ptrack-container">
            <div className="slider">
              <div className="sliderMask">
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
                    {list.map((sub, index) => (
                      <Carousel.Item key={index}>
                        {sub.map(
                          ({
                            href,
                            title,
                            ep,
                            length,
                            description,
                            background,
                            progress
                          }) => (
                            <Episode
                              key={href}
                              href={href}
                              title={title}
                              ep={ep}
                              length={length}
                              description={description}
                              background={background}
                              progress={progress}
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
}

export default EpisodeContainer;

const splitList = (width, list) => {
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

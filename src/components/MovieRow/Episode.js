import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { actionGetSimilarMovies } from "../../state/action/movies";

export const Episode = ({ href, title, length, description, background }) => (
  <div className="slider-item">
    <div className="episodeLockup">
      <div className="ptrack-content">
        <SkeletonTheme highlightColor="#444">
          {background ? (
            <div
              className="episodeArt video-artwork"
              style={{
                backgroundImage: `url('${background}')`
              }}
            >
              <div className="numberVignette"></div>

              <Link className="episodePlay slider-refocus playLink" to={href}>
                <div className="playRing">
                  <div className="play icon-play"></div>
                </div>
              </Link>
            </div>
          ) : (
            <Skeleton duration={2} height={118} />
          )}

          <div className="episodeTitle">
            <p className="ellipsized">{title || <Skeleton duration={2} />}</p>
            <span className="duration">{length}</span>
          </div>
          <div className="episodeSynopsis">
            {description || <Skeleton duration={2} count={4} />}
          </div>
        </SkeletonTheme>
      </div>
    </div>
  </div>
);

function EpisodeContainer({ id }) {
  const [list, setList] = useState(new Array(5).fill({}));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetSimilarMovies({ id })).then(res => setList(res));
  }, [dispatch, id]);

  // const [open, setOpen] = useState(false);

  // const handleSelect = season => {
  //   setSeason(season);
  //   setOpen(false);
  // };

  return (
    <div className="episodesContainer" style={{ marginTop: "20px" }}>
      <div className="ptrack-content">
        {/* {seasons && seasons.length === 1 ? (
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
        )} */}
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
                    {/* {list.map((sub, index) => ( */}
                    <Carousel.Item>
                      {list.map(
                        ({ id, title, length, overview, img }, index) => (
                          <Episode
                            key={index}
                            href={`/title/${id}`}
                            title={title}
                            length={length}
                            description={overview}
                            background={img}
                          />
                        )
                      )}
                    </Carousel.Item>
                    {/* ))} */}
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

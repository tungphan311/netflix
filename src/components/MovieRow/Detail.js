import React, { useState } from "react";
import "./Detail.scss";
import { Link } from "react-router-dom";
import { FILM_DETAILS } from "../../constants";
import DetailMenu from "./DetailMenu";
import Overview from "./Overview";
import EpisodeContainer from "./Episode";
import ShowDetail from "./ShowDetail";

function Detail({ select, selectDetail, width, changeRow }) {
  const [selectedPane, setSelectedPane] = useState("Overview");

  if (!select) return null;

  const { background, logo, seasons } = FILM_DETAILS[select];

  return (
    <div className={`jawBoneContent ${select === 0 ? "" : "open"}`}>
      <span
        className={`jawBoneOpenContainer ${
          select === 0 ? "jawBoneOpen-leave jawBoneOpen-leave-active" : ""
        }`}
      >
        <div className="jawBoneFadeInPlaceContainer">
          <div className="jawBoneContainer slider-hover-trigger-layer">
            <div
              className={`background ${
                selectedPane === "Overview" ? "" : "dim"
              }`}
            >
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
              <div className="nav-shadow"></div>
            </div>
            <div className="jawBone">
              <h3>
                <Link className="jawbone-title-link" to={`/title/${select}`}>
                  <div
                    className="title has-jawbone-nav-transition original"
                    style={{
                      transform: "translateX(0px)",
                      opacity: 1,
                      transitionDelay: "250ms",
                      transitionDuration: "500ms"
                    }}
                  >
                    <img
                      alt="Lucifer"
                      className={`${
                        selectedPane === "Overview" ? "logo" : "logo small-logo"
                      }`}
                      src={logo}
                    />
                  </div>
                </Link>
              </h3>
              <div className="jawBoneCommon">
                <div
                  className={`${
                    selectedPane === "Overview"
                      ? "jawBonePanes"
                      : "jawBonePanes offset-for-logo"
                  }`}
                >
                  <div
                    className="jawBonePane"
                    tabIndex={-1}
                    style={{ opacity: 1, transitionDuration: "300ms" }}
                  >
                    <div className="ptrack-container">
                      {selectedPane === "Overview" && <Overview id={select} />}
                      {selectedPane === "Episodes" && (
                        <EpisodeContainer id={select} width={width} />
                      )}
                      {selectedPane === "ShowDetails" && (
                        <ShowDetail id={select} width={width} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <DetailMenu
                selected={selectedPane}
                handleSelect={setSelectedPane}
                seasons={seasons}
              />
            </div>
            <button
              className="close-button icon-close"
              tabIndex="0"
              onClick={() => {
                selectDetail(0);
                changeRow(0);
              }}
            ></button>
          </div>
        </div>
      </span>
    </div>
  );
}

export default Detail;

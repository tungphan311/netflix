import React, { Component } from "react";
import Slider from "@material-ui/core/Slider";
import "./Watch.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// const poster =
//   "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR8CznPUUUuYW2qfB2l5fsuJbW2_jAUnoSSkS5uN14CRSAu3n2arG7nAsEdb_5U8YmSKetcfHh5wDYfKEIkpMHp1uYfL.jpg";
const src = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";

class Watch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false,
      volume: 100,
      mute: false,
      hover: "",
      fullscreen: false,
      time: 0,
      sub: "vi",
      loading: false
    };
  }

  componentDidMount = () => {
    const video = document.querySelector(".video");
    const track = document.querySelector(".track");

    video.addEventListener("timeupdate", this.updateProgressBar);
    video.addEventListener("loadedmetadata", this.initializeVideo);

    track.addEventListener("mousemove", this.updateTooltip);

    this.setState({ loading: true }, () =>
      setTimeout(() => {
        this.setState({ loading: false });
      }, 3000)
    );
  };

  componentWillUnmount = () => {
    const video = document.querySelector(".video");

    video.removeEventListener("timeupdate", this.updateProgressBar);
  };

  updateProgressBar = () => {
    const video = document.querySelector(".video");
    const progress = document.querySelector(".progress__now");
    const loaded = document.querySelector(".progress__loaded");

    if (video) {
      let pos = video.currentTime / video.duration;
      let load = video.buffered / video.duration;

      progress.style.width = pos * 100 + "%";
      loaded.style.width = load * 100 + "%";

      if (video.ended) {
        this.setState({ play: false });
      }
    }
  };

  initializeVideo = () => {
    const video = document.querySelector(".video");

    if (video) {
      const videoDuration = Math.round(video.duration);

      this.setState({ time: videoDuration });
    }
  };

  updateTooltip = event => {
    const video = document.querySelector(".video");
    const track = document.querySelector(".track");
    const seekTooltip = document.querySelector(".progress__tooltip");

    const skipTo = Math.round(
      (event.offsetX / event.target.clientWidth) * parseInt(this.state.time, 10)
    );

    track.setAttribute("data-track", skipTo);

    const t = this.formatTime(skipTo);

    seekTooltip.textContent = t;
    const rect = video.getBoundingClientRect();
    seekTooltip.style.left = `${event.pageX - rect.left}px`;
  };

  handlePlayBtnClicked = () => {
    const { play } = this.state;
    const video = document.querySelector(".video");

    if (play) {
      video.pause();
    } else {
      video.play();
    }

    this.setState({ play: !play });
  };

  handleTimeSkip = time => {
    const video = document.querySelector(".video");

    video.currentTime = video.currentTime + time;
  };

  formatVolume = value => {
    if (this.state.mute) return "mute";
    else {
      if (value > 50 && value <= 100) return "volume-up";
      else if (value > 0 && value <= 50) return "volume-down";
      else if (value === 0) return "mute";
    }
  };

  formatClasses = name => {
    const { hover } = this.state;

    if (hover) {
      return hover === name ? "nf-btn__hover" : "nf-btn__not-hover";
    }

    return "nf-btn__blur";
  };

  isFullScreen = () =>
    !!(
      document.fullScreen ||
      document.webkitIsFullScreen ||
      document.mozFullScreen ||
      document.msFullscreenElement ||
      document.fullscreenElement
    );

  handleFullscreen = () => {
    const video = document.querySelector(".video");
    if (this.isFullScreen()) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  };

  formatTime = timeInSeconds => {
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

    return `${result.substr(3, 2)}:${result.substr(6, 2)}`;
  };

  handleOnMute = () => {
    const { mute } = this.state;
    const video = document.querySelector(".video");

    video.muted = !mute;
    this.setState({ mute: !mute });
  };

  handleChangeVolume = value => {
    this.setState({ volume: value });
    const video = document.querySelector(".video");
    video.volume = value / 100;
  };

  render() {
    const { play, volume, hover, fullscreen, time, sub, loading } = this.state;
    const {
      match: {
        params: { id }
      },
      history
    } = this.props;

    return (
      <div className="c-video">
        <div className={`loading ${loading ? "" : "d-none"}`}>
          <div className="fa-3x">
            <i className="fas fa-spinner fa-spin"></i>
          </div>
        </div>
        <button
          className={`nf-btn btn-back ${this.formatClasses("back")}`}
          onMouseEnter={() => this.setState({ hover: "back" })}
          onMouseLeave={() => this.setState({ hover: "" })}
          data-tooltip="Back to Previous"
          onClick={() => this.props.history.push("/")}
        >
          <i className="fas fa-arrow-left" style={{ fontSize: "30px" }} />
        </button>
        <video
          className="video"
          src={src}
          onClick={this.handlePlayBtnClicked}
        ></video>
        <div className="controls">
          <div className="progress__bar">
            <div className="progress__container">
              <div
                className={`track ${this.formatClasses("progress")}`}
                onMouseEnter={() => this.setState({ hover: "progress" })}
                onMouseLeave={() => this.setState({ hover: "" })}
              >
                <div className="progress__now"></div>
                <div className="progress__loaded"></div>
                <div className="progress__tooltip">00:00</div>
              </div>
              <div className="progress_change">{this.formatTime(time)}</div>
            </div>
          </div>
          <div className="controller__bar">
            <div className="left-controller">
              <button
                id="play-pause"
                className={`nf-btn ${
                  play ? "pause" : "play"
                } ${this.formatClasses("play")}`}
                onClick={this.handlePlayBtnClicked}
                onMouseEnter={() => this.setState({ hover: "play" })}
                onMouseLeave={() => this.setState({ hover: "" })}
              />
              <button
                id="backward"
                className={`nf-btn backward ${this.formatClasses("backward")}`}
                onClick={() => this.handleTimeSkip(-10)}
                onMouseEnter={() => this.setState({ hover: "backward" })}
                onMouseLeave={() => this.setState({ hover: "" })}
              />
              <button
                id="forward"
                className={`nf-btn forward ${this.formatClasses("forward")}`}
                onClick={() => this.handleTimeSkip(10)}
                onMouseEnter={() => this.setState({ hover: "forward" })}
                onMouseLeave={() => this.setState({ hover: "" })}
              />
              <div
                style={{ position: "relative" }}
                onMouseEnter={() => this.setState({ hover: "mute" })}
                onMouseLeave={() => this.setState({ hover: "" })}
              >
                <button
                  id="mute"
                  className={`nf-btn ${this.formatVolume(
                    volume
                  )} ${this.formatClasses("mute")}`}
                  onClick={this.handleOnMute}
                />
                <div
                  className={`volume-change ${
                    hover === "mute" ? "" : "d-none"
                  }`}
                >
                  <Slider
                    orientation="vertical"
                    max={100}
                    min={0}
                    defaultValue={volume}
                    onChange={(e, value) => this.handleChangeVolume(value)}
                    aria-labelledby="vertical-slider"
                  />
                </div>
              </div>
            </div>
            <div className="right-controller">
              {parseInt(id) % 2 === 1 && (
                <button
                  id="step-forward"
                  className={`nf-btn step-forward ${this.formatClasses(
                    "step-forward"
                  )}`}
                  onClick={() => {
                    history.push(`/watch/${id + 1}`);
                    // eslint-disable-next-line no-restricted-globals
                    location.reload();
                  }}
                  onMouseEnter={() => this.setState({ hover: "step-forward" })}
                  onMouseLeave={() => this.setState({ hover: "" })}
                />
              )}
              <div
                style={{ position: "relative" }}
                onMouseEnter={() => this.setState({ hover: "subtitle" })}
                onMouseLeave={() => this.setState({ hover: "" })}
              >
                <button
                  id="subtitle"
                  className={`nf-btn subtitle ${this.formatClasses(
                    "subtitle"
                  )}`}
                />
                <div
                  className={`subtitle__selector ${
                    hover === "subtitle" ? "" : "d-none"
                  }`}
                >
                  <h3 className="list-header">Subtitles</h3>

                  <ul>
                    <li
                      className={`sub-item ${
                        sub === "en" ? "sub-item-selected" : ""
                      }`}
                      onClick={() => this.setState({ sub: "en" })}
                    >
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={`sub-check ${sub === "en" ? "" : "d-none"}`}
                        color="white"
                      />
                      English
                    </li>
                    <li
                      className={`sub-item ${
                        sub === "vi" ? "sub-item-selected" : ""
                      }`}
                      onClick={() => this.setState({ sub: "vi" })}
                    >
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={`sub-check ${sub === "vi" ? "" : "d-none"}`}
                        color="white"
                      />
                      Vietnamese
                    </li>
                  </ul>
                </div>
              </div>
              <button
                id="fullscrenn"
                className={`nf-btn ${
                  fullscreen ? "compress" : "expand"
                } ${this.formatClasses("fullscreen")}`}
                onClick={this.handleFullscreen}
                onMouseEnter={() => this.setState({ hover: "fullscreen" })}
                onMouseLeave={() => this.setState({ hover: "" })}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Watch;

import React, { Component } from "react";
import Slider from "@material-ui/core/Slider";
import "./Watch.scss";

const poster =
  "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR8CznPUUUuYW2qfB2l5fsuJbW2_jAUnoSSkS5uN14CRSAu3n2arG7nAsEdb_5U8YmSKetcfHh5wDYfKEIkpMHp1uYfL.jpg";
const src = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";

class Watch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false,
      volume: 100,
      mute: false,
      hover: "",
      fullscreen: false
    };
  }

  componentDidMount = () => {
    const video = document.querySelector(".video");
    const progress = document.querySelector(".progress__now");

    video.addEventListener("timeupdate", () => {
      let pos = video.currentTime / video.duration;

      progress.style.width = pos * 100 + "%";

      if (video.ended) {
        this.setState({ play: false });
      }
    });
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
    const { play, volume, mute, hover, fullscreen } = this.state;
    return (
      <div className="c-video">
        <video
          className="video"
          src={src}
          onClick={this.handlePlayBtnClicked}
        ></video>
        <div className="controls">
          <div className="progress__bar">
            <div className="progress__now"></div>
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

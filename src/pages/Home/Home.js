/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import Panel from "../../components/Panel/Panel";
import { RECOMMENDS } from "../../constants";
import "./Home.scss";
import Recommend from "./Recommend/Recommend";
import Popular from "./Recommend/Popular";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recommend: {},
      rowSelect: 0
    };
  }

  componentDidMount = () => {
    let item = RECOMMENDS[Math.floor(Math.random() * RECOMMENDS.length)];

    this.setState({ recommend: item });
  };

  changeRow = id => {
    this.setState({ rowSelect: id });
  };

  render() {
    const { recommend, select, rowSelect } = this.state;

    return (
      <div
        className={select ? "has-open-jaw" : ""}
        style={{ overflow: "hidden" }}
      >
        <Panel film={recommend} />
        <Recommend changeRow={this.changeRow} rowSelect={rowSelect} />
        <Popular changeRow={this.changeRow} rowSelect={rowSelect} />
      </div>
    );
  }
}

export default Home;

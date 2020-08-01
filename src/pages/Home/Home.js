/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import Panel from "../../components/Panel/Panel";
import { RECOMMENDS, SLIDERS } from "../../constants";
import MovieRow from "../../components/MovieRow/MovieRow";
import "./Home.scss";
import Recommend from "./Recommend/Recommend";

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
        {/* {SLIDERS.map(({ title, list, id }) => (
          <MovieRow
            rowId={id}
            rowSelect={rowSelect}
            key={title}
            title={title}
            list={list}
            changeRow={this.changeRow}
          />
        ))} */}
      </div>
    );
  }
}

export default Home;

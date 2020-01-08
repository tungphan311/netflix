/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import Panel from "../../components/Panel/Panel";
import { RECOMMENDS, SLIDERS } from "../../constants";
import MovieRow from "../../components/MovieRow/MovieRow";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recommend: {},
      select: 0
    };
  }

  componentDidMount = () => {
    let item = RECOMMENDS[Math.floor(Math.random() * RECOMMENDS.length)];

    this.setState({ recommend: item });
  };

  selectDetail = id => {
    this.setState({ select: id });
  };

  render() {
    const { recommend, select } = this.state;
    const { history } = this.props;

    return (
      <div
        className={select ? "has-open-jaw" : ""}
        style={{ overflow: "hidden" }}
      >
        <Panel film={recommend} />
        <MovieRow
          title={SLIDERS.title}
          list={SLIDERS.list}
          history={history}
          select={select}
          selectDetail={this.selectDetail}
        />
      </div>
    );
  }
}

export default Home;

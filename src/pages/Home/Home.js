/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import Panel from "../../components/Panel/Panel";
import { RECOMMENDS, SLIDERS } from "../../constants";
import MovieRow from "../../components/MovieRow/MovieRow";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recommend: {}
    };
  }
  componentDidMount = () => {
    let item = RECOMMENDS[Math.floor(Math.random() * RECOMMENDS.length)];

    this.setState({ recommend: item });
  };

  render() {
    const { recommend } = this.state;
    const { history } = this.props;

    return (
      <div>
        <Panel film={recommend} />
        <MovieRow title={SLIDERS.title} list={SLIDERS.list} history={history} />
      </div>
    );
  }
}

export default Home;

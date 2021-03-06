/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import { connect } from "react-redux";
import Panel from "../../components/Panel/Panel";
import "./Home.scss";
import Recommend from "./Recommend/Recommend";
import Popular from "./Recommend/Popular";
import TopRated from "./Recommend/TopRated";

const mapStateToProps = state => ({
  recommends: state.movie.recommends
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowSelect: 0,
      film: {}
    };
  }

  componentWillReceiveProps = nextProps => {
    const length = nextProps.recommends.length;
    const random = Math.floor(Math.random() * length);
    this.setState({ film: nextProps.recommends[random] });
  };

  componentDidMount = () => {
    if (this.props.recommends.length) {
      const length = this.props.recommends.length;
      const random = Math.floor(Math.random() * length);
      this.setState({ film: this.props.recommends[random] });
    }
  };

  changeRow = id => {
    this.setState({ rowSelect: id });
  };

  render() {
    const { select, rowSelect, film } = this.state;
    return (
      <div
        className={select ? "has-open-jaw" : ""}
        style={{ overflow: "hidden" }}
      >
        <Panel film={film} />
        <Recommend changeRow={this.changeRow} rowSelect={rowSelect} />
        <Popular changeRow={this.changeRow} rowSelect={rowSelect} />
        <TopRated changeRow={this.changeRow} rowSelect={rowSelect} />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Home);

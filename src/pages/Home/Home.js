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
    const { history } = this.props;

    return (
      <div
        className={select ? "has-open-jaw" : ""}
        style={{ overflow: "hidden" }}
      >
        <Panel film={recommend} />
        {SLIDERS.map(({ title, list, myList, id }) => (
          <MovieRow
            rowId={id}
            rowSelect={rowSelect}
            key={title}
            title={title}
            list={list}
            myList={myList}
            history={history}
            changeRow={this.changeRow}
          />
        ))}
      </div>
    );
  }
}

export default Home;

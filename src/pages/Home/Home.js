/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import NavBar from "../../components/Navbar/NavBar";
import FilterBlock from "../../components/FilterBlock/FilterBlock";

class Home extends Component {
  render() {
    const { pathname } = this.props.history.location;
    return (
      <div>
        <div className="wrapper">
          <NavBar route={pathname} />
        </div>
        <FilterBlock />
      </div>
    );
  }
}

export default Home;

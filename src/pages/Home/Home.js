import React, { Component } from "react";
import NavBar from "../../components/Navbar/NavBar";

class Home extends Component {
  render() {
    const { pathname } = this.props.history.location;

    return (
      <div className="wrapper">
        <NavBar route={pathname} />
      </div>
    );
  }
}

export default Home;

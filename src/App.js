import React, { Component } from "react";
import { connect } from "react-redux";
import Toastify from "./components/Toastify/Toastify";
import { INIT_DATA } from "./state/reducers/initReducer";
import "bootstrap/dist/css/bootstrap.min.css";

const mapDispatchToProps = dispatch => ({
  initData: () => dispatch({ type: INIT_DATA })
});

class App extends Component {
  componentWillMount = () => {
    this.props.initData();
  };

  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Toastify />
        {children}
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);

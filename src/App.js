import React, { Component } from "react";
import { connect } from "react-redux";
import Toastify from "./components/Toastify/Toastify";
import { INIT_DATA } from "./state/reducers/initReducer";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "./components/Loading/Loading";

const mapStateToProps = state => ({
  loading: state.loading.isLoading
});

const mapDispatchToProps = dispatch => ({
  initData: () => dispatch({ type: INIT_DATA })
});

class App extends Component {
  componentWillMount = () => {
    this.props.initData();
  };

  render() {
    const { children, loading } = this.props;

    return (
      <div className="App">
        <Toastify />
        <Loading loading={loading} />
        {children}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

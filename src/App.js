import React, { useEffect } from "react";
import { connect } from "react-redux";
import Toastify from "./components/Toastify/Toastify";
import { INIT_DATA } from "./state/reducers/initReducer";

const mapDispatchToProps = dispatch => ({
  initData: () => dispatch({ type: INIT_DATA })
});

function App({ initData, children }) {
  useEffect(() => {
    initData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <Toastify />
      {children}
    </div>
  );
}

export default connect(null, mapDispatchToProps)(App);

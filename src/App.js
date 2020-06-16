import React from "react";
import Toastify from "./components/Toastify/Toastify";

function App(props) {
  return (
    <div className="App">
      <Toastify />
      {props.children}
    </div>
  );
}

export default App;

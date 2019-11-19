import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import "./DefaultLayout.scss";

function DefaultLayout({ children, history }) {
  return (
    <div className="wrapper">
      <NavBar history={history} />
      <div className="content">{children}</div>
    </div>
  );
}

export default DefaultLayout;

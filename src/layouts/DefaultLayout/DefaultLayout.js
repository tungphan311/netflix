import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import "./DefaultLayout.scss";

function DefaultLayout({ children, history }) {
  return (
    <div className="wrapper">
      <NavBar history={history} />
      {children}
    </div>
  );
}

export default DefaultLayout;

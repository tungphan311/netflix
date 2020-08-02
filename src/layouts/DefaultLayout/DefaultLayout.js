import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import "./DefaultLayout.scss";
import Footer from "../../components/Footer/Footer";

function DefaultLayout({ children, history }) {
  return (
    <div className="wrapper">
      <NavBar history={history} />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;

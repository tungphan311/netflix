import React, { Component } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../constants";
import Notification from "../Notification/Notification";
import NavigatorItem from "./NavigatorItem/NavigatorItem";
import NavigatorSelect from "./NavigatorSelect/NavigatorSelect";
import Search from "./Search/Search";
import UserSection from "./UserSection/UserSection";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: true
    };
  }

  componentDidMount = () => {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset === 0) {
        this.setState({ top: true });
      } else {
        this.setState({ top: false });
      }
    });
  };

  render() {
    const { top } = this.state;
    const { history } = this.props;
    const route = history.location.pathname;

    return (
      <nav className={`navbar__container ${top ? "top" : "scroll"}`}>
        <div className="nf--navbar">
          <Link aria-label="Netflix" className="navbar_logo" to="/" />
          <ul className="navbar__navigator">
            <NavigatorSelect route={route} title="Browser" />
            {NAV_ITEMS.map(({ title, href }) => (
              <NavigatorItem
                subItem={false}
                key={title}
                title={title}
                href={href}
                isActive={route === href}
              />
            ))}
            {/* <NavigatorSelect route={route} title="Filter" history={history} /> */}
            <Search />
          </ul>
          <div className="navbar__right">
            <Notification />
            <UserSection />
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;

import React, { Component } from "react";
import "./NavBar.scss";
import { NAV_ITEMS } from "../../constants";
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
      <div className={`navbar__container ${top ? "top" : "scroll"}`}>
        <a aria-label="Netflix" className="navbar_logo" href="/" />
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
          <NavigatorSelect route={route} title="Filter" history={history} />
        </ul>
        <div className="navbar__right">
          <Search />
          <i
            className="fas fa-bell icon--large"
            style={{ marginRight: "18px", marginLeft: "14px" }}
          />
          <UserSection />
        </div>
      </div>
    );
  }
}

export default NavBar;

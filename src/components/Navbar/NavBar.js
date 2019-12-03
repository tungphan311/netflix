import React, { useEffect } from "react";
import "./NavBar.scss";
import { NAV_ITEMS } from "../../constants";
import NavigatorItem from "./NavigatorItem/NavigatorItem";
import NavigatorSelect from "./NavigatorSelect/NavigatorSelect";
import Search from "./Search/Search";
import UserSection from "./UserSection/UserSection";

function NavBar({ history }) {
  const route = history.location.pathname;

  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  };

  const debounce = fn => {
    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;

    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
      // If the frame variable has been defined, clear it now, and queue for next frame
      if (frame) {
        cancelAnimationFrame(frame);
      }

      // Queue our function call for the next frame
      frame = requestAnimationFrame(() => {
        // Call our function and pass any params we received
        fn(...params);
      });
    };
  };

  useEffect(() => {
    document.addEventListener("scroll", debounce(storeScroll), {
      passive: true
    });
    storeScroll();
  }, []);

  return (
    <div className="navbar__container">
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
        <i className="fas fa-bell icon--large" />
        <UserSection />
      </div>
    </div>
  );
}

export default NavBar;

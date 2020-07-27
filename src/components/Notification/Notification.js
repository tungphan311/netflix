import React, { useState } from "react";
import "./Notification.scss";
import { Link } from "react-router-dom";

function Notification() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="nav-element"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className="notifications">
        <button className="notifications-menu">
          <span className="icon-button-notification"></span>
          {hover && (
            <div
              className="callout-arrow"
              style={{ opacity: 1, transitionDuration: "150ms" }}
            ></div>
          )}
        </button>
        {hover && (
          <div
            className="sub-menu theme-lakira"
            style={{ opacity: 1, transitionDuration: "150ms" }}
          >
            <div className="topbar"></div>
            <ul className="sub-menu-list">
              <li className="sub-menu-item">
                <div className="ptrack-container">
                  <div className="ptrack-content">
                    <ul className="notifications-container">
                      {NOTI.map((noti, index) => (
                        <Row key={index} noti={noti} />
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}
      </span>
    </div>
  );
}

export default Notification;

const Row = ({ noti: { img, href, header, body, age } }) => (
  <div className="ptrack-content">
    <li className="notification">
      <div className="image-text-notification">
        <Link className="element image notification-link" to={href}>
          <img className="title-card" src={img} alt="logo" />
        </Link>
        <Link className="element text notification-link" to={href}>
          <div className="noti-header">{header}</div>
          <div className="noti-body">{body}</div>
          <div className="noti-age">
            <span className="relative-time">{age}</span>
          </div>
        </Link>
      </div>
    </li>
  </div>
);

const NOTI = [
  {
    img:
      "https://occ-0-64-58.1.nflxso.net/art/2b8b4/40e2010e64cce6fcd604e40078028a537342b8b4.jpg",
    href: "/title/4",
    header: "Wondering what to watch?",
    body: "We suggest Spider-Man: Far from Home.",
    age: "1 day ago"
  },
  {
    img:
      "https://occ-0-64-58.1.nflxso.net/art/8c84f/688062b3e0ec9709afcc9b4afe74aec3d1b8c84f.jpg",
    href: "/title/80187362",
    header: "Top Pick for You",
    body: "Justice League",
    age: "2 day ago"
  },
  {
    img:
      "https://occ-0-64-58.1.nflxso.net/art/4c437/b93283e2091c93109bf89bfbf2f21164d264c437.jpg",
    href: "/title/30",
    header: "You haven't finished watching Spider-Man: Into the Spider-Verse.",
    body: "Watch now!",
    age: "2 day ago"
  },
  {
    img:
      "https://occ-0-64-58.1.nflxso.net/art/4023a/6fb058fcb8b11f21cb11751ca963d876b644023a.jpg",
    href: "/title/80192098",
    header: "Suggestion for You",
    body: "Money Heist",
    age: "3 day ago"
  },
  {
    img:
      "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/jsgGe9NCko3c-j0wGZ7FSwVlHs0/AAAABW1IRzjjDKbycWhO6yqZ4MH8-n4JEkzv5qqDA2TTTjGd_pEppVBKxjnyfnAAAEhbhgGDWXLdqxjxnMkDQ20MUZxvz7vN8ZexVICFbSWogSWgxdmvGtq5yNvjqEuS5Golasa6EPZg6Z98aFelGAHemzpQVBtn4PrsT8gPBYR7LZs.webp?r=562",
    href: "/title/3",
    header: "Vagabond",
    body: "New episode is out. Watch now!",
    age: "5 day ago"
  },
  {
    img:
      "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/jsgGe9NCko3c-j0wGZ7FSwVlHs0/AAAABW1IRzjjDKbycWhO6yqZ4MH8-n4JEkzv5qqDA2TTTjGd_pEppVBKxjnyfnAAAEhbhgGDWXLdqxjxnMkDQ20MUZxvz7vN8ZexVICFbSWogSWgxdmvGtq5yNvjqEuS5Golasa6EPZg6Z98aFelGAHemzpQVBtn4PrsT8gPBYR7LZs.webp?r=562",
    href: "/title/3",
    header: "Vagabond",
    body: "New episode will be released on 01/12/2019",
    age: "10 day ago"
  }
];

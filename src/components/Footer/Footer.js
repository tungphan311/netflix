import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "../Svg/Social";

function Footer() {
  return (
    <div className="member-footer">
      <div className="social-links">
        <a
          className="social-link"
          href="https://www.facebook.com"
          target="_blank"
          aria-label="facebook"
        >
          {Facebook}
        </a>
        <a
          className="social-link"
          href="https://www.instagram.com"
          target="_blank"
          aria-label="instagram"
        >
          {Instagram}
        </a>
        <a
          className="social-link"
          href="https://twitter.com"
          target="_blank"
          aria-label="twitter"
        >
          {Twitter}
        </a>
        <a
          className="social-link"
          href="https://www.youtube.com"
          target="_blank"
          aria-label="youtube"
        >
          {Youtube}
        </a>
      </div>
      <ul className="member-footer-links">
        {LINKS.map(label => (
          <FooterLink label={label} />
        ))}
      </ul>
    </div>
  );
}

export default Footer;

const FooterLink = ({ label }) => (
  <li className="member-footer-link-wrapper">
    <Link to="#" className="member-footer-link">
      <span className="member-footer-link-content">{label}</span>
    </Link>
  </li>
);

const LINKS = [
  "Audio and Subtitles",
  "Audio Description",
  "Help Center",
  "Gift Cards",
  "Media Center",
  "Investor Relations",
  "Jobs",
  "Term of Use",
  "Privacy",
  "Legacy Notices",
  "Cookie Preference",
  "Corporate Information",
  "Contact us"
];

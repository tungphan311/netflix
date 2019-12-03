import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./UserSection.scss";

function UserSection() {
  return (
    <div className="d-flex">
      <div className="avatar__wrapper">
        <img src="/assets/avatar.png" alt="user avatar" />
      </div>
      <div className="down__button">
        <FontAwesomeIcon icon={faChevronDown} color="#fff" size="sm" />
      </div>
    </div>
  );
}

export default UserSection;

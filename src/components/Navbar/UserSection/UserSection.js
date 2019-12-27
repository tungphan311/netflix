import React from "react";
import "./UserSection.scss";

function UserSection() {
  return (
    <div className="d-flex">
      <div className="avatar__wrapper">
        <img src="/assets/avatar.png" alt="user avatar" />
      </div>
      <i className="fas fa-chevron-down" />
    </div>
  );
}

export default UserSection;

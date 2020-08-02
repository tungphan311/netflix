import React, { useState } from "react";
import "./UserSection.scss";
import { useDispatch } from "react-redux";
import { Person, DownArrow } from "../../Svg";
import OutsideClickWrapper from "../../OutsideClickWrapper/OutsideClickWrapper";
import { LOGOUT } from "../../../state/reducers/authReducer";

function UserSection() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <OutsideClickWrapper onClickOutside={() => setOpen(false)} isShowing={open}>
      <div
        className="align-center cursor user-section"
        onClick={() => setOpen(!open)}
      >
        <div className="d-flex">
          {Person}
          {/* <span>tung@gm.co</span> */}
          {DownArrow}
        </div>

        <div className="callout-arrow" style={open ? { opacity: 1 } : {}}></div>
        <div
          className="account-drop-down sub-menu theme-lakira"
          style={open ? { opacity: 1 } : {}}
        >
          <div className="ptrack-content">
            <div className="topbar"></div>
            <ul className="account-links sub-menu-list" aria-label="Account">
              <li className="sub-menu-item">
                <a className="sub-menu-link" href="/YourAccount">
                  Your activity
                </a>
              </li>
              <li className="sub-menu-item">
                <a className="sub-menu-link" href="https://help.netflix.com/">
                  Help Center
                </a>
              </li>
              <li className="sub-menu-item">
                <a className="sub-menu-link" role="button" onClick={logout}>
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </OutsideClickWrapper>
  );
}

export default UserSection;

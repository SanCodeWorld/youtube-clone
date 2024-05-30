import React from "react";
import "./Navbar.css";
import menuIcon from "../../assets/menu_icon.png";
import menuIconBlack from "../../assets/menu_black.png";
import logo from "../../assets/utubeLogo1.png";
import voiceWhite from "../../assets/mic_white.png";
import voiceBlack from "../../assets/mic_black.png";
import createChannel from "../../assets/channelCreate.png";
import notificationBell from "../../assets/notificationsBlack.png";
import account from "../../assets/userBlack.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="box-1">
        <div>
          <img className="menu-icon" src={menuIconBlack} alt="menu-icon" />
        </div>
        <div>
          <img className="utube-logo" src={logo} alt="utube logo" />
          <span className="u-tube-name">UTube</span>
        </div>
      </div>
      <div className="box-2">
        <div className="box-2-div">
          <input type="text" placeholder="Search..." />
          <span>
            <img className="voice-img" src={voiceBlack} alt="voice-search" />
          </span>
        </div>
      </div>
      <div className="box-3">
        <div className="box-3-img-div">
          <img src={createChannel} alt="create-channel" />
        </div>
        <div className="box-3-img-div">
          <img src={notificationBell} alt="notifications" />
        </div>
        <div className="box-3-img-div">
          <img src={account} alt="user-account" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

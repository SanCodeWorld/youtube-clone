import React from "react";
import "./LeftSidebar.css";
import homeBlack from "../../assets/homeBlack.png";
import shots from "../../assets/ytubeShotsBlack.png";
import subscriptions from "../../assets/subscriptionsBlack.png";
import vidLib from "../../assets/videoLibraryBlack.png";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <ul className="left-sidebar-ul">
        <li>
          <img src={homeBlack} alt="home-button" />
          Home
        </li>
        <li>
          <img src={shots} alt="utube-shots" />
          Shorts
        </li>
        <li>
          <img src={subscriptions} alt="subscriptions" />
          Subscriptions
        </li>
        <li>
          <img src={vidLib} alt="you" />
          You
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;

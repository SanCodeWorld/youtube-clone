import React from "react";
import "./Home.css";

import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import Suggestions from "../../Components/Suggestions/Suggestions";
import VideoList from "../../Components/VideoList/VideoList";

const Home = ({ list }) => {
  return (
    <>
      <LeftSidebar />
      <Suggestions />
      <div className="vid-area">
        <VideoList list={list} />
      </div>
    </>
  );
};

export default Home;

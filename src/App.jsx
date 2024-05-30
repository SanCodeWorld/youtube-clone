import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import VideoPage from "./Pages/VideoPage/VideoPage";
import Navbar from "./Components/Navbar/Navbar";
import { API_KEY } from "./APIkey";

const App = () => {
  const [list, setList] = useState([]);
  const currentLoc = useLocation();

  let getVideo = async () => {
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`
    );
    let data = await res.json();
    setList(data.items);
  };

  useEffect(() => {
    getVideo();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentLoc]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home list={list} />} />
        <Route path="/watch/:videoID/:categoryId" element={<VideoPage />} />
      </Routes>
    </>
  );
};

export default App;

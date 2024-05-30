import React, { useEffect, useState } from "react";
import "./VideoPlayer.css";
import VideoPlayerLeft from "../VideoPlayerLeft/VideoPlayerLeft";
import SuggestionsRight from "../SuggestionsRight/SuggestionsRight";
import Suggestions from "../Suggestions/Suggestions";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../APIkey";

const VideoPlayer = () => {
  // const [videoTitle, setVideoTitle] = useState("");
  // const [channelTitle, setChannelTitle] = useState("");
  // const [categoryId, setCategoryId] = useState("0");
  // const [viewCount, setViewCount] = useState("");
  // const [likeCount, setLikeCount] = useState("");
  // const [commentCount, setCommentCount] = useState("");

  const [pair, setPair] = useState({
    videoTitle: "",
    channelTitle: "",
    // categoryId: "10",
    viewCount: "",
    likeCount: "",
    commentCount: "",
  });

  let { videoID, categoryId } = useParams();

  let getData2 = async () => {
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoID}&key=${API_KEY}`
    );

    let data = await res.json();

    setPair({
      videoTitle: data.items[0].snippet.title,
      channelTitle: data.items[0].snippet.channelTitle,
      // categoryId: data.items[0].snippet.categoryId,
      viewCount: data.items[0].statistics.viewCount,
      likeCount: data.items[0].statistics.likeCount,
      commentCount: data.items[0].statistics.commentCount,
    });

    // setVideoTitle(data.items[0].snippet.title);
    // setChannelTitle(data.items[0].snippet.channelTitle);
    // setCategoryId(data.items[0].snippet.categoryId);
    // setViewCount(data.items[0].statistics.viewCount);
    // setLikeCount(data.items[0].statistics.likeCount);
    // setCommentCount(data.items[0].statistics.commentCount);
    // console.log("cat-id : " + categoryId);
  };

  useEffect(() => {
    getData2();
  }, [videoID, categoryId]);
  return (
    <div className="vid-main">
      <div className="video-player-main">
        <VideoPlayerLeft
          videoID={videoID}
          videoTitle={pair.videoTitle}
          channelTitle={pair.channelTitle}
          viewCount={pair.viewCount}
          likeCount={pair.likeCount}
          commentCount={pair.commentCount}
          categoryId={categoryId}
        />
      </div>
      <div className="suggest-vid-right">
        <SuggestionsRight categoryId={categoryId} />
      </div>
    </div>
  );
};

export default VideoPlayer;
// videoTitle,channelTitle,viewCount,likeCount,commentCount
// https://youtu.be/XQyYNp1cwuE
// <iframe width="641" height="360" src="https://www.youtube.com/embed/XQyYNp1cwuE" title="Immortality Tumblr Post" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

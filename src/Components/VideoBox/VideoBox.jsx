import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const VideoBox = ({
  videoId,
  title,
  thumbnail,
  channelTitle,
  categoryID,
  publishedAt,
  channelId,
  viewCount,
}) => {
  return (
    <div className="vid-box">
      <Link to={`/watch/${videoId}/${categoryID}`}>
        <div className="vid-thumbnail">
          <img src={thumbnail} alt="video" />
        </div>
      </Link>

      <div className="vid-data">
        <div className="right-vid-title">
          <p>{title}</p>
        </div>
        <div className="right-channel-name">
          <span>{channelTitle}</span>
        </div>
        <div className="vid-view-data">
          <span>{viewCount}Views</span>
          <div className="dot">
            <span>.</span>
          </div>
          <span>{publishedAt}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoBox;

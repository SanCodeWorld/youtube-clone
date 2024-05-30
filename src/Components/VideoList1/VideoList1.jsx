import React, { useEffect, useState } from "react";
import { API_KEY } from "../../APIkey";
import { convert } from "../../APIkey";
import { Link } from "react-router-dom";
import "./VideoList1.css";

const VideoList1 = ({
  thumbnail,
  channelTitle,
  vidTitle,
  viewCount,
  channelId,
  videoID,
  categoryId,
}) => {
  const [channelLogo, setChannelLogo] = useState("");

  let getLogo = async () => {
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`
    );

    let data = await res.json();
    setChannelLogo(data.items[0].snippet.thumbnails.medium.url);
  };

  useEffect(() => {
    getLogo();
  }, []);
  return (
    <Link to={`/watch/${videoID}/${categoryId}`} className="video-container">
      <div className="video-thumbnail">
        <img src={thumbnail} alt="thumbnail of video" />
      </div>

      <div className="video-details">
        <div className="channel-img">
          <img src={channelLogo} alt="channel-logo" />
        </div>
        <div className="channel-details">
          <p className="video-title">{vidTitle}</p>
          <p className="channel-name">{channelTitle}</p>
          <div className="view-details">
            <span>{convert(viewCount)}</span>
            <span>
              <b>&bull;</b> 2 Hours ago
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoList1;
// /**
//  * <Link to={`/go/${channelId}`} key={ind}></Link>
//  */

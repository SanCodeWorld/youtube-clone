import React, { useEffect, useRef, useState } from "react";
import "./VideoPlayerLeft.css";
import likes from "../../assets/likesBlack.png";
import dislike from "../../assets/disLikeBlack.png";
import share from "../../assets/shareBlack.png";
import more from "../../assets/moreBlack.png";
import user from "../../assets/userBlack.png";
import sort from "../../assets/sortBlack.png";
import { API_KEY } from "../../APIkey";

const VideoPlayerLeft = ({
  videoID,
  videoTitle,
  channelTitle,
  viewCount,
  likeCount,
  commentCount,
  categoryId,
}) => {
  let srcURL = `https://www.youtube.com/embed/${videoID}?autoplay=1`;

  const playerRef = useRef(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      playerRef.current = new YT.Player("player", {
        events: {
          onReady: onPlayerReady,
        },
        playerVars: {
          autoplay: 1,
          controls: 1, // Disable the default controls
        },
      });
    };

    const onPlayerReady = (e) => {
      e.target.loadVideoById(videoID);
    };
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady();
    getComment();
  }, [videoID]);

  const getComment = async () => {
    let url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=5&videoId=${videoID}&key=${API_KEY}`;

    let res = await fetch(url);
    let data = await res.json();
    setComments(data.items);
  };

  return (
    <>
      <div className="video-upper">
        <iframe
          className="video-source"
          id="player"
          width="640"
          height="360"
          src={srcURL}
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen="true"
        ></iframe>

        <div className="video-source-name">{videoTitle}</div>
        <div className="video-stats">
          <div className="channel-logo">
            <img className="channel-logo-img" src={user} alt="" />
          </div>
          <div className="chan-name">
            <span>{channelTitle}</span>
            <span className="sub-count">2.25 M Subscribers</span>
          </div>
          <div className="subscribe-btn">Subscribe</div>
          <div className="like-dislike">
            <img src={likes} alt="like-button" />
            <span>{likeCount}</span>
            <img src={dislike} alt="" />
          </div>
          <div className="share-vid">
            <img src={share} alt="share" />
            <span>Share</span>
          </div>
          <div className="more">
            <img src={more} alt="more" />
          </div>
        </div>
        <div></div>
        <div className="vid-detail-expand">
          <p>
            {viewCount} views 22 May 2024 #1 on Trending for music <br />{" "}
            #Indian2
            <br />
            #Paaraa <br />
            #anirudhravichander
            <br /> Lyca Productions Subaskaran Presents Red Giant Movies
            Ulaganayagan Kamal Haasan in Shankar’s Indian 2`
          </p>
        </div>
      </div>
      <div className="comment-lower">
        <div className="comment-sort">
          <span className="comment-count">{commentCount} Comments</span>
          <div className="sort-by">
            <img src={sort} alt="sort-by" />
            <span>Sort By</span>
          </div>
        </div>
        <div className="my-comment">
          <img src={user} alt="my-comment" />
          <div className="comment-field">
            <textarea placeholder="your comment"></textarea>
            <div className="comment-cancel">
              <span>Cancel</span>
              <span className="comment-btn">Comment</span>
            </div>
          </div>
        </div>

        {comments.map((comment, index) => (
          <div className="other-comments">
            <div className="div-1">
              <img
                src={
                  comment.snippet.topLevelComment.snippet.authorProfileImageUrl
                }
                alt="user"
              />
            </div>
            <div className="div-2">
              <div className="user-id-posted">
                <span className="span-1">
                  {comment.snippet.topLevelComment.snippet.authorDisplayName}
                </span>
                <span className="span-2">
                  {comment.snippet.topLevelComment.snippet.publishedAt}
                </span>
              </div>
              <div className="comment-area">
                <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
              </div>
              <div className="comment-like">
                <img src={likes} alt="like" />
                <span className="like-count-">
                  {comment.snippet.topLevelComment.snippet.likeCount}
                </span>
                <img src={dislike} alt="dislike" />
                <span className="reply">Reply</span>
              </div>
            </div>
          </div>
        ))}

        {/* ------------------------------------------------------------------------------------- */}

        {/* --------------------------------------------------------------------------------- */}
      </div>
    </>
  );
};

export default VideoPlayerLeft;

{
  /* <div className="video-source">
          <iframe
            width="640"
            height="360"
            src={srcURL}
            title="Lionel Messi vs Netherlands (World Cup 2022) English Commentary - HD 1080i"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div> */
}

{
  /* <div className="video-source"></div> */
}
/*GET https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=5&videoId=9rCb7uwSvTM&key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json

*/

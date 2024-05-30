import React, { useEffect, useState } from "react";
import "./SuggestionsRight.css";
import VideoBox from "../VideoBox/VideoBox";
import { API_KEY } from "../../APIkey";

const SuggestionsRight = ({ categoryId }) => {
  const [list1, setList1] = useState([]);
  console.log("c-id : " + categoryId);

  // let url = ;

  let getSideVideoData = async () => {
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
    );

    let data = await res.json();
    // console.log(data.items);
    setList1(data.items);
    console.log("len : " + list1.length);
  };

  useEffect(() => {
    getSideVideoData();
    // console.log(list1.length);
  }, [categoryId]);

  return (
    <>
      {list1.map((item, index) => (
        <VideoBox
          videoId={item.id}
          title={item.snippet.title}
          thumbnail={item.snippet.thumbnails.medium.url}
          channelTitle={item.snippet.channelTitle}
          categoryID={item.snippet.categoryId}
          publishedAt={item.snippet.publishedAt}
          channelId={item.snippet.channelId}
          viewCount={item.statistics.viewCount}
          key={index}
        />
      ))}
    </>
  );
};

export default SuggestionsRight;
//videoId,title,thumbnails,channelTitle,categoryId,publishedAt,channelId,viewCount
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=2&videoCategoryId=&key=AIzaSyC4kWqWbEBB05EYYWa-FtjKzrmsQRxpIQY

// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=3&regionCode=IN&videoCategoryId=24&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

//

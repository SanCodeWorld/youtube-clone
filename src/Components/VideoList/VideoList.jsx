import React from "react";
import VideoList1 from "../VideoList1/VideoList1";
import "./VideoList.css";

const VideoList = ({ list }) => {
  return (
    <>
      {list.map((item, ind) => {
        return (
          <>
            <VideoList1
              thumbnail={item.snippet.thumbnails.medium.url}
              channelTitle={item.snippet.channelTitle}
              vidTitle={item.snippet.title}
              viewCount={item.statistics.viewCount}
              channelId={item.snippet.channelId}
              videoID={item.id}
              categoryId={item.snippet.categoryId}
              key={item.id}
            />
          </>
        );
      })}
    </>
  );
};

export default VideoList;

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * // <>{arr}</>
    // <div className="vid-list-page">
    //   <div className="vid-container">
    //     <Link to={"/go/4"}>
    //       <img className="vid-thumbnail" src="" alt="" />
    //     </Link>
    //     <div className="vid-details">
    //       <Link to={"/go/4"}>
    //         <div className="chn-logo">
    //           <div src="" alt=""></div>
    //         </div>
    //       </Link>
    //       <div className="chn-details">
    //         <p className="video-title">coolie</p>
    //         <p className="channel-name">sun tv</p>
    //         <div className="view-details">
    //           <span>1M views</span>
    //           <span>2 Hours ago</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // -----------------------------------------------------------------------------------
    // <div className="vid-list-page">
    //   <div className="vid-container">
    //     <Link to={"/go/4"}>
    //       <div className="vid-thumbnail">yes</div>
    //     </Link>

    //   </div>
    // </div>
//  * -------------------------------------------------------------------------
 */ // let arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(
//     <div className="box">
//       <Link to={"/go/3"}>
//         <div className="thumbnail">
//           <img src="" />
//         </div>
//       </Link>
//       <div className="detail">
//         <div className="logo">
//           <Link to={"/go/4"}>
//             <img src="" />
//           </Link>
//         </div>
//         <div className="data"></div>
//       </div>
//     </div>
//   );
// }

// ---------------------------------------------------------

//   const thumbnail = require("../../assets/thumbnail.JPG");let drr = [];  console.log(drr.length);
// let crr = async (drr) => {
//   brr = await getVideo();                           UClG8odDC8TS6Zpqk9CGVQiQ
//   console.log("brr : " + brr);                        0fRBmXtfo_8
//   brr.forEach((pic, ind) => {
//     drr.push(<VideoList1 thumbnail={pic} key={ind} />);
//   });
// };
// crr(drr);
// console.log(drr.length);
// let list1 =
// console.log("list1" + list1);
// console.log("list1 length : " + list1.length);
// setList(list1);
// console.log("list length : " + list.length);

// for (let i = 0; i < items.length; i++) {
//   let thumbnail = items[i].snippet.thumbnails.medium.url;
//   console.log("thumbnail :  " + thumbnail);
//   arr.push(thumbnail);
// arr.push(<VideoList1 thumbnail={thumbnail} key={i} />);
// setList((thumbnail, i) => {
//   <VideoList1 thumbnail={thumbnail} key={i} />;
// });
// }
// console.log("arr length : " + arr.length);
// console.log("arr[0] : " + arr[0]);
// console.log("arr : " + arr);
// return arr;
/**
 * GET https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&part=id&part=liveStreamingDetails&part=localizations&part=player&part=recordingDetails&part=snippet&part=statistics&part=status&part=topicDetails&chart=mostPopular&maxResults=3&regionCode=IN&key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json

 * 
 * 
 * 
 * 
 */

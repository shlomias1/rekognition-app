import React from "react";
import vid from "../img/pilate-video.webm";
import "./Home.css";
const Video = () => {
  return (
    <div id="ctn">
      <video controls muted width="70%" autoPlay={true} playsInline loop>
        <source src={vid} type="video/webm" />
      </video>
    </div>
  );
};

export default Video;

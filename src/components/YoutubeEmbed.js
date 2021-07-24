import React from "react";
import ReactPlayer from "react-player/youtube";
import "./YoutubeEmbed.css";

const YoutubeEmbed = ({ embedId }) => {
  return (
    <div className="videoResponsive">
      {/* <ReactPlayer
        url="https://www.youtube.com/watch?v=WxIRFf-u_Bs"
        playing="true"
        controls="true"
      /> */}
      <iframe
        width="650"
        height="400"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeEmbed;

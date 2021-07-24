import React from "react";
import "./YoutubeEmbed.css";

const YoutubeEmbed = ({ embedId }) => {
  return (
    <div className="videoResponsive">
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

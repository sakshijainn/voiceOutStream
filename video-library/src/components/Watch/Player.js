import React, { useEffect } from "react";
import { useParams } from "react-router";
import VideoMetaData from "./VideoMetaData";

import "./Player.css";
function Player() {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="player-container">
      <div className="watchscreen-player">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <div>
        {" "}
        <VideoMetaData />
      </div>
    </div>
  );
}

export default Player;

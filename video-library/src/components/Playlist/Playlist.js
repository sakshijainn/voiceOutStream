import React from "react";
import { useVideo } from "../../context/VideoContext";

function Playlist() {
  const {
    state: { playlist },
  } = useVideo();
  console.log(playlist);
  return (
    <div style={{marginTop:"6rem"}} className="playlist-container">
      <h1> i am playlist</h1>
    </div>
  );
}

export default Playlist;

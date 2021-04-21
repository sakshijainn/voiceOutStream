import React, { useState } from "react";
import "./TrendingPage.css";
import "../TrendingVideos/JOURNALS";
import JOURNALS from "../TrendingVideos/JOURNALS";
import STATIONARY from "../TrendingVideos/STATIONARY";
import STORIES from "../TrendingVideos/STORIES"
function TrendingPage() {
  const [journal, setjournal] = useState("JOURNALS");
  return (
    <div className="trending-container">
      <div className="trending_filter">
        <img
          class="avataricontrend"
          src="https://www.youtube.com/img/trending/avatar/trending_avatar.png"
        ></img>
        <h2>Trending</h2>
        <hr />
      </div>
      <div className="video-buttons">
        <button onClick={(e) => setjournal(e.target.innerText)}>
          Journals
        </button>
        <button onClick={(e) => setjournal(e.target.innerText)}>
          Stationary
        </button>
        <button onClick={(e) => setjournal(e.target.innerText)}>Stories</button>
      </div>

      <div>
        {journal === "JOURNALS" && <JOURNALS />}
        {journal === "STATIONARY" && <STATIONARY/>}
        {journal === "STORIES" && <STORIES/>}
      </div>
    </div>
  );
}

export default TrendingPage;

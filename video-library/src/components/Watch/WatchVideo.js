import React from 'react'
import WatchPage from "./WatchPage";
import SideBar from "../SideBar/SideBar";
import "./WatchVideo.css"
function WatchVideo() {
    return (
        <div>
        <div className="watch-wrapper">
        <div className="sidebar"> <SideBar/></div>
        <div className="watchpage"> <WatchPage/></div>
      
    
     
     </div>
        </div>
    )
}

export default WatchVideo

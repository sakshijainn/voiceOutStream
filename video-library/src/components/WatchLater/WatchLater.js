import React from 'react'
import  "./WatchLater.css"
import SideBar from "../SideBar/SideBar";
import WatchLaterVideos from './WatchLaterVideos';
function WatchLater() {
    return (
        <div>
        <div className="watchlater-wrapper">
        <div className="sidebar"> <SideBar/></div>
        <div className="watchlater-page"> <WatchLaterVideos/></div>
      
    
     
     </div>
        </div>
    )
}

export default WatchLater
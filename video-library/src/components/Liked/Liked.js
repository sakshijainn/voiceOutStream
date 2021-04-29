import React from 'react'
import "./Liked.css"
import SideBar from "../SideBar/SideBar";
import LikedVideos from "../LikedVideos/LikedVideos"
function Liked() {
    return (
        <div>
        <div className="liked-wrapper">
        <div className="sidebar"> <SideBar/></div>
        <div className="liked-page"> <LikedVideos/></div>
      
    
     
     </div>
        </div>
    )
}

export default Liked
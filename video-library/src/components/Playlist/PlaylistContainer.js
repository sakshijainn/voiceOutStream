import React from 'react'
import SideBar from "../SideBar/SideBar";
import Playlist from './Playlist';
import "./PlaylistContainer.css"
function PlaylistContainer() {
    return (
        <div>
        <div className="playlist-wrapper">
        <div className="sidebar"> <SideBar/></div>
        <div className="playlist-page"> <Playlist/></div>
      
    
     
     </div>
        </div>
    )
}

export default PlaylistContainer
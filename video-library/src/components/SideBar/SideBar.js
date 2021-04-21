import React from 'react'
import SideBarRow from "./SideBarRow";
import "./SideBar.css"
import {Link} from "react-router-dom";

function SideBar() {
    return (
        <div className="sidebarComp">
        <Link to="/">
        <SideBarRow selected icon={<i class="fa fa-home" aria-hidden="true"></i>} title="Home"/>
        </Link>
        
        <Link to="/trending">
        <SideBarRow icon={<i class="fa fa-fire" aria-hidden="true"></i>} title="Trending"/>
        </Link>
        
        <SideBarRow icon={<i class="fa fa-play" aria-hidden="true"></i>}title="Subscription"/>
        <hr/>
        <SideBarRow icon={<i class="fa fa-history" aria-hidden="true"></i>}title="History"/>
        <SideBarRow icon={<i class="fa fa-clock-o" aria-hidden="true"></i>} title="Watch later"/>
        <SideBarRow icon={<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>} title="Liked Videos"/>
        <SideBarRow icon={<i class="fa fa-music" aria-hidden="true"></i>} title="My Playlist"/>
        <hr/>
      
           
           
        </div>
    )
}

export default SideBar

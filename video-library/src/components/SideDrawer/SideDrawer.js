import React,{useState} from 'react'
import "./SideDrawer.css"
import SideBarRow from "../SideBar/SideBarRow";
import "../SideBar/SideBar";
import {Link} from "react-router-dom";
function SideDrawer() {
    
    return (
       
        <nav className="side-drawer">
        <div className="sidebarComp">
        <Link className="link" to="/">
        <SideBarRow selected icon={<i class="fa fa-home" aria-hidden="true"></i>} title="Home"/>
        </Link>
        
        <Link className="link" to="/trending">
        <SideBarRow icon={<i class="fa fa-fire" aria-hidden="true"></i>} title="Trending"/>
        </Link>
        
        <SideBarRow icon={<i class="fa fa-play" aria-hidden="true"></i>}title="Subscription"/>
        <hr/>

        <Link className="link" to="/history">

        <SideBarRow icon={<i class="fa fa-history" aria-hidden="true"></i>}title="History"/>
        </Link>
        
        <Link className="link" to="/watchList">
        <SideBarRow icon={<i class="fa fa-clock-o" aria-hidden="true"></i>} title="Watch later"/>
        </Link>
        
        <Link className="link" to="/liked-videos">
        <SideBarRow icon={<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>} title="Liked Videos"/>
        </Link>

        <Link className="link" to="/playlist">
        <SideBarRow icon={<i class="fa fa-music" aria-hidden="true"></i>} title="My Playlist"/>
        </Link>
       
        
        <hr/>
      
           
           
        </div>
        </nav>
      
    )
}

export default SideDrawer




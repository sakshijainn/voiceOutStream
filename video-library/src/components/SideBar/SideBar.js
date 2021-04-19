import React from 'react'
import SideBarRow from "./SideBarRow";
import "./SideBarRow.css"

function SideBar() {
    return (
        <div className="sidebarComp">
        <SideBarRow selected icon={<i class="fa fa-home" aria-hidden="true"></i>} title="Home"/>
        <SideBarRow icon={<i class="fa fa-fire" aria-hidden="true"></i>} title="Trending"/>
        <SideBarRow icon={<i class="fa fa-play" aria-hidden="true"></i>}title="Subscription"/>
        <hr/>
        <SideBarRow icon={<i class="fa fa-history" aria-hidden="true"></i>}title="History"/>
        <SideBarRow icon={<i class="fa fa-clock-o" aria-hidden="true"></i>} title="Watch later"/>
        <SideBarRow icon={<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>} title="Liked Videos"/>
        <hr/>
      
           
           
        </div>
    )
}

export default SideBar

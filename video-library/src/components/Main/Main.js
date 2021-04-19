import React from 'react'
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import VideoData from "../VideoData/VideoData";
import "./Main.css"

function Main() {
    return (
       <>
         <Header/>
        
         <div className="content-wrapper">
            <div className="sidebar"> <SideBar/></div>
            <div className="videos"><VideoData/></div>
        
         
         </div>
         
       </>
    )
}

export default Main

import React from 'react'
import "./Trending.css"
import SideBar from "../SideBar/SideBar";
import TrendingPage from "./TrendingPage/TrendingPage";
function Trending() {
    return (
        <div>
        <div className="trending-wrapper">
        <div className="sidebar"> <SideBar/></div>
        <div className="trending-page"> <TrendingPage/></div>
      
    
     
     </div>
        </div>
    )
}

export default Trending

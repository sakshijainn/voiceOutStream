import React from 'react'
import "./History.css"
import SideBar from "../SideBar/SideBar";
import HistoryVideos from './HistoryVideos';
function HistoryComp() {
    return (
        <div>
        <div className="history-wrapper">
        <div className="sidebar"> <SideBar/></div>
        <div className="history-page"> <HistoryVideos/></div>
      
    
     
     </div>
        </div>
    )
}

export default HistoryComp
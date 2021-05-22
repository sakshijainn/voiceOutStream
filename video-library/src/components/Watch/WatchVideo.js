import React,{useEffect} from 'react'
import WatchPage from "./WatchPage";
import SideBar from "../SideBar/SideBar";
import "./WatchVideo.css"
import { useParams } from "react-router";
import {useVideo} from "../../context/VideoContext";

function WatchVideo() {
    const { state, dispatch } = useVideo();
    const { id } = useParams();
    useEffect(() => {
        dispatch({ type: "HISTORY", payload: id });
    },[])

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

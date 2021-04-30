import React,{useEffect, useState} from 'react'
import "./VideoMetaData.css";
import {useVideo} from "../../context/VideoContext";
import { useParams } from "react-router";
import { Link  } from "react-router-dom";
import PlaylistModal from "../PlaylistModal/PlaylistModal";
function VideoMetaData() {

    
    const {state:{playlist},dispatch} = useVideo();

    const[toggle,setToggle]= useState(false);

    console.log(playlist)

 

   

      const { id } = useParams();


      
    return (
        <div className="videometadata">
            <div className="top">

                <h4>Video Title</h4>
                <div>
                    <div><p className="infoP">10k Subscribers . 2 Months Ago</p></div>
                    <div class="btn-container">
            
                    <Link to="/liked-videos">
                    <button onClick={() => dispatch({ type: "LIKE", payload: id })} >like</button>
                    
                    </Link>
                   
                    
                   <Link to="/watchList">
                   <button onClick={() => dispatch({ type: "WATCH_LATER", payload: id })}>Watch <i class="fa fa-clock-o" aria-hidden="true"></i></button>
                   </Link>
                   
                     
                     
                     </div>
                </div>
                   
            </div>
           <hr/>
            <div className="middle">
            <div className="image-div">   
            <div> <img className="iconn" src="https://www.youtube.com/img/trending/avatar/trending_avatar.png"></img>
            </div>
            <div class="subscriber-content"><h5>VoiceOut</h5> <h5>10k Subscribers</h5></div>
           
            </div>
            <div>
            <button
            // onClick={() =>{
            //   setToggle(toggle=>!toggle)
            //   dispatch({ 
              
            //   type: "CREATE_NEW_PLAYLIST", payload: id })
            // }}
            className="subscribe">Save+</button>
            


            </div>
               
                   
          </div>

          <div className="bottom">
          {toggle && <PlaylistModal/>}
          </div>
        
          
        </div>
    )
}

export default VideoMetaData

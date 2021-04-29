import React from 'react'
import "./VideoMetaData.css";
import {useVideo} from "../../context/VideoContext";
import { useParams } from "react-router";
import { Link  } from "react-router-dom";
function VideoMetaData() {

    const {dispatch} = useVideo();

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
                   
                    
                   
                     <button>Watch <i class="fa fa-clock-o" aria-hidden="true"></i></button></div>
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
            <button className="subscribe">Subscribe</button></div>
               
                   
          </div>
         
          <div className="bottom"></div>
        </div>
    )
}

export default VideoMetaData

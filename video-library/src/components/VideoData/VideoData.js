import "./Videodata.css";
import React, { useEffect} from "react";
import axios from "axios";
import setupMockVideoServer from "../../server/mock-server";
import {useVideo} from "../../context/VideoContext"




function VideoData() {
    const {state:{videos},dispatch} = useVideo();
    useEffect(() => {
        (async function () {
          try {
            setupMockVideoServer();
            
            const response = await axios.get("/api/videos");
           dispatch({ type: "DATA_FROM_SERVER", payload: response.data.videos});
          } catch (error) {
            console.log("error");
          }
        })();
      }, [videos]);

    return (
        <div className="recommendedVideos">
            <h6>Recommended</h6>
            <div className="recommendedVideos_video">
               {videos.map((item)=>(
                  <div className="videoCard">
                    <iframe className="thumbnail"
                    src={`https://www.youtube.com/embed/${item.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"/>
                    <div className="video_info">
                    
                    <div className="avatar">
                         <img src={item.imageSrc} alt=""/>
                        
                        
                    </div>
                    <div className="video-text">
                    <h4>{item.title}</h4>
                    <p>{item.channel}</p>
                   <p>{item.views}.{item.timestamp}</p>
                    </div>

</div>
                  </div>
               ))}
            </div>
        </div>
    )
}

export default VideoData

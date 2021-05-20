import "./Videodata.css";
import React, { useEffect} from "react";
import axios from "axios";
import setupMockVideoServer from "../../server/mock-server";
import {useVideo} from "../../context/VideoContext"
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";




function VideoData() {
    const history = useNavigate();
    const {state,dispatch} = useVideo();
    console.log(state.keyword);
    const { id } = useParams();
    useEffect(() => {
        (async function () {
          try {
            setupMockVideoServer();
            
            const response = await axios.get("/api/videos");
           dispatch({ type: "DATA_FROM_SERVER", payload: response.data.videos});
          } 
          
          catch (error) {
            console.log("error");
          }
        })();
      }, [state.videos]);


      const FilteredData = (state, data) => {

        let getVideos = [...data];

        if (state.keyword) {
          getVideos = getVideos.filter((video) => video.title.toLowerCase().includes(state.keyword));
        }

        return getVideos;
    }
      
          const filteredVideos = FilteredData(state, state.videos)

          console.log(filteredVideos)

    
     

    return (
        <div className="recommendedVideos">
            <h3>Recommended</h3>
            <div className="recommendedVideos_video" >
            
           
               {filteredVideos.map((item)=>(
                  <div key={item.id} className="videoCard" >

                
                  <Link to={{ pathname: `/watch/${item.id}` }}>
                    <img  className="thumbnail" src={item.thumbnail}/>
                </Link>
                
                    
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

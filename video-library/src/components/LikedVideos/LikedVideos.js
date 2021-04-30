import React from 'react'
import {useVideo} from "../../context/VideoContext";
import { useHistory } from "react-router-dom";

function LikedVideos() {
    const {state:{videos,likedVideos}} = useVideo();
    const history = useHistory();
    
      console.log("hello")
      console.log(likedVideos);
      const videoList = likedVideos.map((itemId)=>{

        return videos.find((video) => video.id === itemId);
     
     
       })
     
    
     
    return (
        <div className="recommendedVideos">
        <h2>Liked Videos</h2>
        <div className="recommendedVideos_video" >
       
           {videoList.map((item)=>(
              <div className="videoCard" >

            
                <img onClick={()=>{history.push(`/watch/${item.id}`)}} className="thumbnail" src={item.thumbnail}/>
            
                
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

export default LikedVideos

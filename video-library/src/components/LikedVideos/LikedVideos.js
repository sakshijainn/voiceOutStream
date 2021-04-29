import React from 'react'
import {useVideo} from "../../context/VideoContext";

function LikedVideos() {
    const {state:{videos,likedVideos}} = useVideo();
    
      console.log("hello")
      console.log(likedVideos);
      const videoList = likedVideos.map((itemId)=>{

        return videos.find((video) => video.id === itemId);
     
     
       })
     
    
     
    return (
        <div style={{marginTop:"5rem"}}>
        {videoList.map((item)=><li>{item.title}</li>)}
        </div>
    )
}

export default LikedVideos

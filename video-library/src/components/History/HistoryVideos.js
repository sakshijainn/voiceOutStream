import React from 'react'
import {useVideo} from "../../context/VideoContext";
import { useHistory } from "react-router-dom";

function HistoryVideos() {
    const { state:{videos,historyVideos} } = useVideo();
    const history = useHistory();
    const historyList = historyVideos.map((itemId)=>{

        return videos.find((video) => video.id === itemId);
     
     
       })
    return (
        <div className="recommendedVideos">
        <h2>History</h2>
        <div className="recommendedVideos_video" >
       
           {historyList.map((item)=>(
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

export default HistoryVideos

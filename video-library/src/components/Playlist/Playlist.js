import React from "react";
import { useVideo } from "../../context/VideoContext";
import "./Playlist.css"


function Playlist() {
  const {
    state:{playlist,videos}
  } = useVideo();




  return (


    <div className="recommendedVideos">
        <h2>Playlists</h2>
        <div className="recommendedVideos_video" >

        {  playlist.map(({name,videosAdded})=>{
          
            
          return videosAdded.map((videoId)=>{
              const check = videos.find((video)=> video.id=== videoId)
              console.log(check)

            
             return (
               <div className="playlistcard">
              <div className="videoCard">
              <h3>Playlist Name:{name}</h3>
              <iframe
                src={`https://www.youtube.com/embed/${check.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
           
              <div className="video_info">
                <div className="avatar">
                  <img src={check.imageSrc} alt="" />
                </div>
                <div className="video-text">
                  <h4>{check.title}</h4>
                  <p>{check.channel}</p>
                  <p>
                    {check.views}.{check.timestamp}
                  </p>
                </div>
              </div>
            </div>
            </div>
               
              )
            
          })
         })}

       
       
       
          
        </div>
    </div>
  
      
  )
}

export default Playlist;


      
   
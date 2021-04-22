import React from 'react'
import "./VideoMetaData.css";
function VideoMetaData() {
    return (
        <div className="videometadata">
            <div className="top">

                <h4>Video Title</h4>
                <div>
                    <div><p>10k subscribers.2months ago</p></div>
                    <div><button>like</button> <button>unlike</button></div>
                </div>
                   
            </div>
           <hr/>
            <div className="middle">
            <div className="image-div">   
            <div> <img className="iconn" src="https://www.youtube.com/img/trending/avatar/trending_avatar.png"></img>
            </div>
            <div><h5>SakshiJain</h5> <h5>10k subscribers</h5></div>
           
            </div>
            <div>
            <h5><button>Subscribe</button></h5></div>
               
                   
          </div>
          <hr/>  
          <div className="bottom"></div>
        </div>
    )
}

export default VideoMetaData

import React from 'react'
import "./Channel.css"
function Channel(props) {
    const{imageChannel, ChannelLogo, verifiedSubs,noOfVideos ,description}=props;
    return (

        <div className="channelRow">
        <img class="avataricon" src={imageChannel}></img>
        <div className="channelRowText">
        <h3>{ChannelLogo}</h3>
        <h5>{verifiedSubs} subscribers . {noOfVideos} videos </h5>
        <p>{description}</p>
        </div>
      
      </div>
    )
}

export default Channel

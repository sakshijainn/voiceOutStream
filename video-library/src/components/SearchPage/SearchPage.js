import React from 'react'
import "./SearchPage.css";
import Channel from "./Channel/Channel";
import VideoRow from "./Videos/Videos";
function SearchPage() {
    return (
        <div className="search-container">
           <div className="searchpage_filter">
           <i class="fa fa-filter" aria-hidden="true"></i>
           <h2>FILTER</h2>
           </div>
           <hr/>
           <Channel
           imageChannel="https://yt3.ggpht.com/ytc/AAUvwnh5mNH_n4-Fmwqy99iSBlYRDnPJgvhkOWHiNMvrGw=s88-c-k-c0x00ffffff-no-rj"
           ChannelLogo ="Psych2Go "
           verifiedSubs="1.36K"
           noOfVideos ={380}
           description="
           Saving lives by building communities around mental health and psychology animated content. 
           Having personally experienced depression, and having a platform to share that was a healing process. 
           "

           />
           <hr/>
           <VideoRow/>
        </div>
    )
}

export default SearchPage

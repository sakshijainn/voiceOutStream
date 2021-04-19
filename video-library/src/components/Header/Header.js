import React from "react";
import "./Header.css";

function Header() {
  return (
    
    <div className="header">
      <div className="left-header">
  {/* <i class="fa fa-bars" aria-hidden="true"></i> */}  

         <h1 className="logo">
         {" "}
         voiceOut<i class="fa fa-gratipay" aria-hidden="true"></i>
        </h1>
      </div>
    
      <div className="middle-header">
        <input type="text" placeholder="search"/>  
      
       
       
       
      </div>
    
      <div className="right-header">
        <i className="fa fa-video-camera" aria-hidden="true"></i>
        <i className="fa fa-bell" aria-hidden="true"></i>
        <a href="https://twitter.com/bradenhamm" class="circle">
	    <img height="32" width="32" src="https://pbs.twimg.com/profile_images/1375107782244925448/svTFu_ze.jpg"
         alt="Sakshi Jain"/></a>
      </div>
     
     
      </div>
    
      );
}

export default Header;

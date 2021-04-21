import React,{useState} from "react";
import "./Header.css";
import { Link  } from "react-router-dom";

function Header() {
  const[inputSearch,setSearch]= useState("");
  return (
    
    <div className="header">
      <div className="left-header">
  {/* <i class="fa fa-bars" aria-hidden="true"></i> */}  
        <Link to="/"> 
        <h1 className="logo">
        {" "}
        voiceOut<i class="fa fa-gratipay" aria-hidden="true"></i>
      </h1>
      </Link>

        
      </div>
    
      <div className="middle-header">
        <input  type="text" value={inputSearch} onChange={e=>setSearch(e.target.value)} placeholder="search"/>  

        <Link to={`/search/{inputSearch}`}><i class="fa fa-search" aria-hidden="true"></i></Link>
      
       
       
       
      </div>
    
      <div className="right-header">
  {/*  <i className="fa fa-video-camera" aria-hidden="true"></i>
        <i className="fa fa-bell" aria-hidden="true"></i>*/}
      
       
        <a href="https://twitter.com/bradenhamm" class="circle">
	    <img height="32" width="32" src="https://pbs.twimg.com/profile_images/1375107782244925448/svTFu_ze.jpg"
         alt="Sakshi Jain"/></a>
      </div>
     
     
      </div>
    
      );
}

export default Header;

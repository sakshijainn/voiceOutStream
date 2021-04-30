import React,{useState} from "react";
import "./Header.css";
import { Link  } from "react-router-dom";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import SideDrawer from "../SideDrawer/SideDrawer";
import {useVideo} from "../../context/VideoContext";

function Header() {
  const { state, dispatch } = useVideo();
  const [isOpened, setIsOpened] = useState(false);
  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
  }
  const handleSearch = (e) => {
    dispatch({ type: "SEARCH", payload: e.target.value })
}

const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCH" })
}

  return (
    
    <div className="header">
      <div className="left-header">
      <div onClick={toggle}><DrawerToggleButton/>
      
      </div>
      {isOpened && <SideDrawer/> }
        <Link className="link" to="/"> 
        <h1 className="logo">
        {" "}
        voiceOut<i class="fa fa-gratipay" aria-hidden="true"></i>
      </h1>
      </Link>

        
      </div>
    
      <div className="middle-header">
        <input  type="text" value={state.keyword} onChange={handleSearch} placeholder="search"/>  

       
      
       
       
       
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

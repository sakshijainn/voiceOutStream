import React from 'react'
import SideBar from "../SideBar/SideBar";
import "./Search.css"
import SearchPage from "../SearchPage/SearchPage"

function Search() {
    return (
        <div>
        <div className="search-wrapper">
        <div className="sidebar"> <SideBar/></div>
        <div className="searchpage"> <SearchPage/></div>
      
    
     
     </div>
        </div>
    )
}

export default Search

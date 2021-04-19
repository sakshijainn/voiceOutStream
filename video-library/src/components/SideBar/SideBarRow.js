import React from 'react'
import "./SideBarRow.css"
function SideBarRow({selected,icon,title}) {
    return (
        <div className={`sideBarRow  && ${selected && "selected"}`}>
        
            <h1 className= "sidebarIcon">{icon}</h1>
            <h2 className="sidebarTitle">{title}</h2>
            
        </div>
    )
}

export default SideBarRow;

import React from 'react'
import './SidebarRow.css'

function SidebarRow({Icon, title, selected}){
    return(
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon" />
            <h3 className="sidebarRow__text">{title}</h3>
        </div>
    )
}

export default SidebarRow
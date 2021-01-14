import React from 'react';
import './Sidebar.css'

function SidebarOption({ Icon, title, color }) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" /> }
            {Icon ? ( 
                <h3 className="sidebarOption__title">{title}</h3>
                ) : (<h3 className="sidebarOption__channel" style={{color}}>
                        <span className="sidebarOption__hash">#</span>
                        {title}
                    </h3>
            )}
        </div>
    )
}

export default SidebarOption

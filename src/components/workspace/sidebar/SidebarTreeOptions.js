import React, {useState} from 'react';
import './Sidebar.css';
import IconButton from '@material-ui/core/IconButton';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

function SidebarTreeOptions({title, children}) {
    const [drop, setDrop] = useState(false)

    return (
        <div className="sidebarTreeOptions">
            <div className="sidebarTreeOptions__root">
                <div className="sidebarTreeOptions__view" onClick={() => setDrop(!drop)}>
                    <IconButton aria-label="tree">
                        { drop ? <ArrowDropDownRoundedIcon id="icon" /> : <ArrowRightRoundedIcon id="icon" /> }
                    </IconButton>
                    <h3 className="sidebarTreeOptions__title">{title}</h3>
                </div>
                
                <IconButton aria-label="tree" className="sidebarTreeOptions__drop-down">
                    <AddRoundedIcon id="icon" />
                </IconButton>
            </div>
            {drop && (
                <div className="sidebarTreeOptions__item">
                    {children}
                </div>
            )}
        </div>
    )
}

export default SidebarTreeOptions

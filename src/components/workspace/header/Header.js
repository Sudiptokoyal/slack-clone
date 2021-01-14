import React from 'react'
import Avatar from '@material-ui/core/Avatar';

import './Header.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <div className="user__access-time">
                    <AccessTimeIcon />
                </div>
            </div>
            <div className="header__search">
                <div className="user__search">
                    <input placeholder="Search {workspace_name}" />
                </div>
                <div className="user__help">
                    <HelpOutlineIcon />
                </div>
            </div>
            <div className="header__right">
                <div className="user__profile">
                    <Avatar variant="rounded"></Avatar>
                </div>
            </div>
        </div>
    )
}

export default Header

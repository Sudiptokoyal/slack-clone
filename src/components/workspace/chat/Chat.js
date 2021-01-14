import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';


function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__header__left">
                    <p className="chat__header--title">Workspace Name</p>
                </div>
                <div className="chat__header__right">
                    <div className="chat__header__members">
                        <AvatarGroup max={4}>
                            <Avatar alt="Remy Sharp" src="" />
                            <Avatar alt="Travis Howard" src="" />
                            <Avatar alt="Cindy Baker" src="" />
                            <Avatar alt="Agnes Walker" src="" />
                            <Avatar alt="Trevor Henderson" src="" />
                        </AvatarGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat

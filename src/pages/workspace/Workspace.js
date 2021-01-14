import React, { useState } from 'react'
import './Workspace.css';
// Components
import Header from '../../components/workspace/header/Header';
import Sidebar from '../../components/workspace/sidebar/Sidebar';
import Chat from '../../components/workspace/chat/Chat';

function Workspace() {

    return (
        <div className="ws">
            {/* Workspace Nav or Header */}
            <Header />
            {/* Workspace Main */}
            <div className="ws__main">
                {/* Workspace Sidebar */}
                <div className="ws__sidebar">
                    <Sidebar />
                </div>
                {/* Workspace Chat */}
                <div className="ws__chat">
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default Workspace

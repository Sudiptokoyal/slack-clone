import React from "react";
import { Switch, Route } from "react-router-dom";

import "./Workspace.css";
// Components
import Header from "../../components/workspace/header/Header";
import Sidebar from "../../components/workspace/sidebar/Sidebar";
import Chat from "../../components/workspace/chat/Chat";

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
				<Switch>
					{/* Workspace Chat */}
					<Route path={`/ws/channel/:channelID`}>
						<div className="ws__chat">
							<Chat />
						</div>
					</Route>
					<Route path="/">
						<h1>Welcome to Slack-clone!!</h1>
						<h3>Hire me</h3>
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default Workspace;

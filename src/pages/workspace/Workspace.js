import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import "./Workspace.css";
// Components
import Header from "../../components/workspace/header/Header";
import Sidebar from "../../components/workspace/sidebar/Sidebar";
import Chat from "../../components/workspace/chat/Chat";

function Workspace() {
	let { path } = useRouteMatch();

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
					<Route path={`${path}/channel/:channelID`}>
						<div className="ws__chat">
							<Chat />
						</div>
					</Route>
					<Route path={`${path}/messages`}>
						<div className="ws__chat">
							<h2>Messages</h2>
						</div>
					</Route>
					<Route path="/">
						<h1>Welcome to Slack-clone!!</h1>
						<h3>
							<a href="#">Hire me</a>
						</h3>
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default Workspace;

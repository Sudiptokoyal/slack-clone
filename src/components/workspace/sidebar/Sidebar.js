import React, { useState, useEffect } from "react";

import "./Sidebar.css";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import SidebarTreeOptions from "./SidebarTreeOptions";
import QuestionAnswerRoundedIcon from "@material-ui/icons/QuestionAnswerRounded";
import db from "../../../firebase.config";

function Sidebar() {
	const [channels, setChannels] = useState([]);
	const [selectedOption, setSelectedOption] = useState("");

	const getChannels = () => {
		db.collection("channels").onSnapshot((snapshot) => {
			setChannels(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					name: doc.data().name,
				}))
			);
		});
	};

	useEffect(getChannels, []);

	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<div className="sidebar__header__button">
					<Button
						className="workspace__title"
						variant="contained"
						color="secondary"
						startIcon={<ExpandMoreIcon />}
					>
						Workspace
					</Button>
				</div>
				<IconButton aria-label="new message" className="new-message">
					<CreateIcon />
				</IconButton>
			</div>
			<SidebarOption Icon={InsertCommentIcon} title="Thread" />
			<SidebarOption Icon={QuestionAnswerRoundedIcon} title="All DMs" />
			<SidebarOption Icon={MoreVertIcon} title="More" />
			{/* Channels */}
			<SidebarTreeOptions title="Channels">
				{channels.map((channel) => (
					<SidebarOption
						key={channel.id}
						id={channel.id}
						title={channel.name}
						color="white"
						selectedOption={selectedOption}
						setSelectedOption={setSelectedOption}
					/>
				))}
				<SidebarOption Icon={AddRoundedIcon} title="More" />
			</SidebarTreeOptions>
			{selectedOption && <SidebarOption title={selectedOption} />}
			{/* {Messages} */}
			<SidebarTreeOptions title="Direct Messages">
				<SidebarOption title="User Name (you)" color="white" />
				<SidebarOption Icon={AddRoundedIcon} title="Add teammates" />
			</SidebarTreeOptions>
			{/* Apps */}
			<SidebarTreeOptions title="Apps">
				<SidebarOption Icon={AddRoundedIcon} title="Add apps" />
			</SidebarTreeOptions>
		</div>
	);
}

export default Sidebar;

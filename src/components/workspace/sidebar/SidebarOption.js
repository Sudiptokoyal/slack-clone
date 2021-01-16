import React from "react";
import { useHistory } from "react-router-dom";

import "./Sidebar.css";

function SidebarOption(props) {
	const { Icon, title, color, id, setSelectedOption, selectedOption } = props;
	const history = useHistory();

	const goToChannel = () => {
		if (id) {
			setSelectedOption(title);
			history.push(`/ws/channel/${id}`);
		}
	};

	return (
		<div
			className="sidebarOption"
			onClick={() => goToChannel()}
			style={{
				backgroundColor: selectedOption === title ? "#1172bb" : "#3F0E40",
			}}
		>
			{Icon && <Icon className="sidebarOption__icon" />}
			{Icon ? (
				<h3 className="sidebarOption__title">{title}</h3>
			) : (
				<h3 className="sidebarOption__channel" style={{ color }}>
					<span className="sidebarOption__hash">#</span>
					{title}
				</h3>
			)}
		</div>
	);
}

export default SidebarOption;

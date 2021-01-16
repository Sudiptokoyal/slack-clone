import React, { useState, useRef } from "react";
import "./Sidebar.css";
import IconButton from "@material-ui/core/IconButton";

// Icons
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import db from "../../../firebase.config";

import GenericPopup from "../../popup/GenericPopup";

function SidebarTreeOptions({ title, children }) {
	const [drop, setDrop] = useState(false);
	const [open, setOpen] = useState(false);
	const [channel, setChannel] = useState({ name: "", about: "" });

	const ref = useRef(null);

	const createChannel = () => {
		setOpen(false);
		if (channel.name) {
			db.collection("channels").add(channel);
		}
	};

	const handleInput = (key, value) => {
		if (key === "name") {
			setChannel((state) => ({
				...state,
				name: value,
			}));
		} else {
			setChannel((state) => ({
				...state,
				about: value,
			}));
		}
	};

	const handleClose = () => {
		setOpen(false);
	};
	// open dialog to create
	const addHandler = () => {
		if (title === "Channels") {
			setOpen(true);
		}
	};

	return (
		<div>
			<div className="sidebarTreeOptions">
				<div className="sidebarTreeOptions__root">
					<div
						className="sidebarTreeOptions__view"
						onClick={() => setDrop(!drop)}
					>
						<IconButton aria-label="tree">
							{drop ? (
								<ArrowDropDownRoundedIcon id="icon" />
							) : (
								<ArrowRightRoundedIcon id="icon" />
							)}
						</IconButton>
						<h3 className="sidebarTreeOptions__title">{title}</h3>
					</div>

					<IconButton
						aria-label="tree"
						className="sidebarTreeOptions__drop-down"
						onClick={addHandler}
					>
						<AddRoundedIcon id="icon" />
					</IconButton>
				</div>
				{drop && <div className="sidebarTreeOptions__item">{children}</div>}
			</div>

			<GenericPopup
				ref={ref}
				open={open}
				handleClose={handleClose}
				handleConfirm={createChannel}
				title="Create a Channel"
				subTitle="Channels are where your team communicates. They’re best when organized around a topic — #marketing, for example.
				"
			>
				<div className="generic__form">
					<div className="generic__form__wrapper">
						<label htmlFor="name" className="generic__form--label">
							Name
						</label>
						<input
							id="name"
							type="text"
							value={channel.name}
							onChange={(e) => handleInput(e.target.id, e.target.value)}
							className="generic__form--input"
						/>
					</div>
					<div className="generic__form__wrapper">
						<label htmlFor="about" className="generic__form--label">
							Description
							<span className="generic__form--optional-label">(Optional)</span>
						</label>
						<input
							id="about"
							type="text"
							value={channel.about}
							onChange={(e) => handleInput(e.target.id, e.target.value)}
							className="generic__form--input"
						/>
					</div>
				</div>
			</GenericPopup>
		</div>
	);
}

export default SidebarTreeOptions;

import React, { useEffect, useState } from "react";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import IconButton from "@material-ui/core/IconButton";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import { useParams } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import db from "../../../firebase.config";
function Chat() {
	const { channelID } = useParams();
	const [channelInfo, setChannelInfo] = useState(null);

	useEffect(() => {
		// effect
		db.collection("channels")
			.doc(channelID)
			.onSnapshot((snapshot) => {
				setChannelInfo(snapshot.data());
			});

		console.log(channelInfo);
		return () => {
			// cleanup
		};
	}, [channelID]);

	return (
		<div className="chat">
			<div className="chat__header">
				<div className="chat__header__left">
					<p className="chat__header--title">
						<strong># {channelInfo?.name}</strong>
					</p>
					<IconButton aria-label="star">
						<StarBorderRoundedIcon />
					</IconButton>
				</div>
				<div className="chat__header__right">
					<div className="chat__header__members">
						<AvatarGroup max={2}>
							<Avatar alt="Remy Sharp" src="" />
							<Avatar alt="Travis Howard" src="" />
							<Avatar alt="Cindy Baker" src="" />
						</AvatarGroup>
					</div>
					<IconButton aria-label="person add">
						<PersonAddOutlinedIcon />
					</IconButton>
					<IconButton aria-label="info">
						<InfoOutlinedIcon />
					</IconButton>
				</div>
			</div>
			<div className="chat__body">
				<List>
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src="" />
						</ListItemAvatar>
						<ListItemText
							primary="Brunch this weekend?"
							secondary={
								<React.Fragment>
									<Typography
										component="span"
										variant="body2"
										color="textPrimary"
									>
										Ali Connors
									</Typography>
									{" — I'll be in your neighborhood doing errands this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
				</List>
			</div>
		</div>
	);
}

export default Chat;

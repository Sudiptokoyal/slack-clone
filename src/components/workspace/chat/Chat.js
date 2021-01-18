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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import db from "../../../firebase.config";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import TelegramIcon from "@material-ui/icons/Telegram";
import InputAdornment from "@material-ui/core/InputAdornment";
import firebase from "firebase";
import { useSelector } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";

function Chat() {
	const { channelID } = useParams();
	const [channelInfo, setChannelInfo] = useState(null);
	const [chat, setChat] = useState(null);
	const [message, setMessage] = useState("");
	const user = useSelector((state) => state.user);

	useEffect(() => {
		// effect
		db.collection("channels")
			.doc(channelID)
			.onSnapshot((snapshot) => {
				setChannelInfo(snapshot.data());
			});

		db.collection("channels")
			.doc(channelID)
			.collection("chat")
			.orderBy("timestamp", "asc")
			.onSnapshot((snapshot) => {
				setChat(snapshot.docs.map((doc) => doc.data()));
			});
	}, [channelID]);

	const handleChange = () => (event) => {
		setMessage(event.target.value);
	};

	const sendMessage = () => {
		if (message && channelID) {
			db.collection("channels").doc(channelID).collection("chat").add({
				message,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				username: user.name,
				userprofile: user.picture,
			});
		}
		setMessage("");
	};

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
						{/* <AvatarGroup max={2}>
							<Avatar alt="Remy Sharp" src="" />
							<Avatar alt="Travis Howard" src="" />
							<Avatar alt="Cindy Baker" src="" />
						</AvatarGroup> */}
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
					{chat &&
						chat.map((eachChat, index) => (
							<div key={index}>
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Avatar
											variant="rounded"
											alt={eachChat?.username}
											src={eachChat?.userprofile}
										/>
									</ListItemAvatar>
									<ListItemText
										primary={
											<React.Fragment>
												<Typography component="span" variant="h6" gutterBottom>
													{eachChat?.username}
												</Typography>
												<Typography component="span" variant="h6" gutterBottom>
													{" "}
												</Typography>
												<Typography
													component="span"
													variant="body2"
													gutterBottom
												>
													{new Date(
														eachChat?.timestamp?.toDate()
													).toUTCString()}
												</Typography>
											</React.Fragment>
										}
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="subtitle1"
													color="textPrimary"
												>
													{eachChat?.message}
												</Typography>
											</React.Fragment>
										}
									/>
									<ListItemSecondaryAction>
										<IconButton aria-label="more option">
											<MoreVertIcon />
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>
								<Divider variant="inset" component="li" />
							</div>
						))}
				</List>
			</div>
			<div className="chat__footer">
				<InputLabel htmlFor="outlined-adornment-amount">Message</InputLabel>
				<FormControl fullWidth variant="outlined">
					<OutlinedInput
						id="outlined-adornment-amount"
						value={message}
						onChange={handleChange()}
						labelWidth={60}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="Send chat message"
									onClick={sendMessage}
								>
									<TelegramIcon />
								</IconButton>
							</InputAdornment>
						}
					/>
				</FormControl>
			</div>
		</div>
	);
}

export default Chat;

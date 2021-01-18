import React from "react";
import { useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";

import "./Header.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Badge from "@material-ui/core/Badge";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const StyledBadge = withStyles((theme) => ({
	badge: {
		backgroundColor: "#44b700",
		color: "#44b700",
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		"&::after": {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			animation: "$ripple 1.2s infinite ease-in-out",
			border: "1px solid currentColor",
			content: '""',
		},
	},
	"@keyframes ripple": {
		"0%": {
			transform: "scale(.8)",
			opacity: 1,
		},
		"100%": {
			transform: "scale(2.4)",
			opacity: 0,
		},
	},
}))(Badge);

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		"& > *": {
			margin: theme.spacing(1),
		},
	},
}));

function Header() {
	const user = useSelector((state) => state.user);
	const classes = useStyles();

	return (
		<div className="header">
			<div className="header__left">
				<div className="user__access-time">
					<AccessTimeIcon />
				</div>
			</div>
			<div className="header__search">
				<div className="user__search">
					<input placeholder="Search" />
				</div>
				<div className="user__help">
					<HelpOutlineIcon />
				</div>
			</div>
			<div className="header__right">
				<div id="user__profile" className={classes.root}>
					<StyledBadge
						overlap="circle"
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "right",
						}}
						variant="dot"
					>
						<Avatar variant="rounded" alt="user name" src={user?.picture} />
					</StyledBadge>
				</div>
			</div>
		</div>
	);
}

export default Header;

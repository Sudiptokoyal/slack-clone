import React, { useState } from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import setUser from "../../store/actions/userActions";

import { auth, provider } from "../../firebase.config";
import GenericSnackbar from "../../components/GenericSnackbar";

function Login() {
	const [errorMsg, setErrorMsg] = useState(null);
	const [open, setOpen] = useState(null);
	const dispatch = useDispatch();
	const history = useHistory();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((results) => {
				if (results && results.hasOwnProperty("additionalUserInfo")) {
					const userData = results.additionalUserInfo.profile;
					dispatch(setUser(userData));
				}
			})
			.catch((error) => {
				// const message = JSON.parse(error.message);
				// setErrorMsg(message.error.message);
				// setOpen(true);
			});
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className="login">
			<Paper className="login__hero">
				<div className="login__logo">
					<img
						src="data:image/png;base64,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"
						alt="Slack logo"
					/>
				</div>
				<div className="login__hero__title">
					<h1>Sign in to Slack Clone</h1>
					<h3>
						Continue with the Google account or email address you use to sign
						in.
					</h3>
				</div>

				<Button
					variant="contained"
					color="primary"
					disableElevation
					onClick={signIn}
				>
					Sign in using Google
				</Button>
			</Paper>

			<GenericSnackbar
				open={open}
				handleClose={handleClose}
				severity="error"
				message={errorMsg}
			/>
		</div>
	);
}

export default Login;

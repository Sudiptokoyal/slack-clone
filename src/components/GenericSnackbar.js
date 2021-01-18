import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function GenericSnackbar(props) {
	const { open, duration = 6000, handleClose, message, severity } = props;

	return (
		<div>
			<Snackbar open={open} autoHideDuration={duration} onClose={handleClose}>
				<Alert onClose={handleClose} severity={severity}>
					{message}
				</Alert>
			</Snackbar>
		</div>
	);
}

export default GenericSnackbar;

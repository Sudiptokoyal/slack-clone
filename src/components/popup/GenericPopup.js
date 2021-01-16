import React, { forwardRef } from "react";
// Dialog
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
} from "@material-ui/core";

const GenericPopup = (props, ref) => {
	const {
		open,
		handleClose,
		handleConfirm,
		title,
		subTitle,
		children,
		maxWidth = "xs",
	} = props;

	return (
		<Dialog
			ref={ref}
			maxWidth={maxWidth}
			open={open}
			onClose={handleClose}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">{title}</DialogTitle>
			<DialogContent>
				<DialogContentText id="dialog-content-text">
					{subTitle}
				</DialogContentText>
				{children}
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
					Cancel
				</Button>
				<Button onClick={handleConfirm} variant="outlined" color="primary">
					Ok
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default forwardRef(GenericPopup);

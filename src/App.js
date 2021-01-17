import { useState, Fragment } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import Login from "./pages/login/Login";

const theme = createMuiTheme({
	typography: {
		fontSize: 16,
		color: "textPrimary",
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});

function App() {
	const [user, setUser] = useState(null);

	return (
		<MuiThemeProvider theme={theme}>
			{!user ? (
				<Login />
			) : (
				<Fragment>
					<div className="App">
						<Router>
							<AppRouter />
						</Router>
					</div>
				</Fragment>
			)}
		</MuiThemeProvider>
	);
}

export default App;

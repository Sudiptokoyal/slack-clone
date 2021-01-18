import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom";
// import AppRouter from "./AppRouter";
import Login from "./pages/login/Login";
import Workspace from "./pages/workspace/Workspace";

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
	const user = useSelector((state) => state.user);

	return (
		<MuiThemeProvider theme={theme}>
			{!user ? (
				<Login />
			) : (
				<Router>
					<Workspace />
				</Router>
			)}
		</MuiThemeProvider>
	);
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
	return (
		<div className="welcome">
			<h1>Welcome to Slack-clone!!</h1>
			<h3>
				<Link to={"https://www.linkedin.com/in/sudipto-koyal-07329613a/"}>
					Hire me
				</Link>
			</h3>
		</div>
	);
}

export default Welcome;

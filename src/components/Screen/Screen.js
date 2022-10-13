import React from "react";
import "./Screen.css";

class Screen extends React.Component {
	constructor(props) {
		super(props);
		//the data displayed in screen will update in response to user events, so state seems appropriate
		this.state = {
			result: 0,
		};
	}

	render() {
		return <div className="screen">{this.state.result}</div>;
	}
}

export default Screen;

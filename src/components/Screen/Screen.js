import React from "react";
import "./Screen.css";

//TODO check if value of button is available to screen
//TODO have the screen show the value of the clicked button, by using setState()
//TODO once achieved, write functions to determine how values are processed

class Screen extends React.Component {
	constructor(props) {
		super(props);
		//the data displayed in screen will update in response to user events, so state seems appropriate
		this.state = {
			result: 0,
		};
	}

	render() {
		return <div className="screen">{this.props.msgFunc}</div>;
	}
}

export default Screen;

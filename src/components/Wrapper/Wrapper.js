import "./Wrapper.css";
import React from "react";
import Screen from "../Screen/Screen.js";
import ButtonBox from "../ButtonBox/ButtonBox.js";

class Wrapper extends React.Component {
	//constructor typically used to initialize local state by assigning object to this.state
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="calc-wrapper">
				<Screen />
				<ButtonBox />
			</div>
		);
	}
}

export default Wrapper;

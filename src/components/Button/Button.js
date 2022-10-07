import React from "react";
import "./Button.css";
import { setClass } from "../functionLib/functionLib";

class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// let ops = ""
		// if (this.props.buttonVal == "C") {
		// 	ops = "C-Class";
		// }
		return (
			<button
				className={setClass(this.props.buttonVal)}
				value={this.props.buttonVal}
				onClick={this.props.msgFunc}
			>
				{this.props.buttonVal}
			</button>
		);
	}
}

export default Button;

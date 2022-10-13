import React from "react";
import "./Button.css";

import { setClass } from "../functionLib/functionLib";
import { msgButton } from "../functionLib/functionLib";

class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button
				className={setClass(this.props.buttonVal)}
				value={this.props.buttonVal}
				onClick={() => {
					msgButton(this.props.buttonVal);
				}}
			>
				{this.props.buttonVal}
			</button>
		);
	}
}

export default Button;

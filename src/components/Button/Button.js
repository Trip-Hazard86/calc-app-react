import React from "react";
import "./Button.css";

import { setClass } from "../functionLib/functionLib";

class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button
				type="button"
				className={setClass(this.props.buttonVal)}
				value={this.props.buttonVal}
				//the onClick is an event handler
				//when a button is clicked, an anon func is called
				//the func reaches into props, grabs msgFunc, and sends the buttonVal as an arg
				//this is enabling us to pass buttonVal up the heirarchy
				onClick={() => {
					this.props.msgFunc(this.props.buttonVal);
				}}
			>
				{this.props.buttonVal}
			</button>
		);
	}
}

export default Button;

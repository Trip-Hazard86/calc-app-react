import React from "react";
import Button from "../Button/Button";
import { msgButton } from "../functionLib/functionLib";
import "./ButtonBox.css";

const BUTTONS = [
	["C", "%", "/"],
	[7, 8, 9, "X"],
	[4, 5, 6, "-"],
	[1, 2, 3, "+"],
	[0, ".", "="],
];

class ButtonBox extends React.Component {
	constructor(props) {
		super(props);
	}

	//we can map over the array as earlier defined to populate the button box
	//we are going to make use of props as a vehicle to carry data down into the Button component
	render() {
		return (
			<div className="button-box">
				{BUTTONS.map((line, index) => {
					return line.map((button) => {
						return (
							<Button
								key={button.toString()}
								buttonVal={button}
								msgFunc={msgButton}
							/>
						);
					});
				})}
			</div>
		);
	}
}

export default ButtonBox;

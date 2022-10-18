import React from "react";
import Button from "../Button/Button";
import "./ButtonBox.css";

const BUTTONS = [
	["C", "CE", "/"],
	[7, 8, 9, "*"],
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
							<>
								<Button
									key={button.toString()}
									buttonVal={button}
									//creating a prop msgFunc, which is anonymous function, takes one arg
									//the thick arrow is basically saying "do stuff with this"
									//valueParam is passed in from Button...the value of the clicked button
									msgFunc={(valueParam) => this.props.msgFunc(valueParam)}
								/>
							</>
						);
					});
				})}
			</div>
		);
	}
}

export default ButtonBox;

import "./Wrapper.css";
import React from "react";
import Screen from "../Screen/Screen.js";
import ButtonBox from "../ButtonBox/ButtonBox.js";

//TODO enable Wrapper to access the value of the Button component

class Wrapper extends React.Component {
	//constructor typically used to initialize local state by assigning object to this.state
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="calc-wrapper">
				<Screen
					//the button values, which are stored in valueParam, need to be available to Screen
					//this is a case of passing the values DOWN
					msgFunc={(valueParam) => this.props.msgFunc(valueParam)}
				/>
				<ButtonBox
					//ButtonBox has access to the value of our Buttons
					//Wrapper also needs access
					//pass msgFunc as prop down to ButtonBox
					msgFunc={(valueParam) =>
						console.log(valueParam + " avail to wrapper")
					}
				/>
			</div>
		);
	}
}

export default Wrapper;

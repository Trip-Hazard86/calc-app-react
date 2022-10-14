import "./Wrapper.css";
import React from "react";
import Screen from "../Screen/Screen.js";
import ButtonBox from "../ButtonBox/ButtonBox.js";
import { calculate } from "../functionLib/functionLib";

class Wrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			questionValue: "",
			answerValue: "",
		};
	}

	//pass calculate func. into this, so that the state can be updated
	changeStateFromValue() {
		this.setState({});
	}

	render() {
		return (
			<div className="calc-wrapper">
				<Screen
					questionValue={this.state.questionValue}
					answerValue={this.state.answerValue}
				/>
				<ButtonBox
					//in order for changeState...to work, it needs to receive a value as an argument
					msgFunc={(valueParam) => this.changeStateFromValue(valueParam)}
				/>
			</div>
		);
	}
}

export default Wrapper;

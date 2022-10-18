import "./Wrapper.css";
import React from "react";
import Screen from "../Screen/Screen.js";
import ButtonBox from "../ButtonBox/ButtonBox.js";
import { decideOperator } from "../functionLib/functionLib";

class Wrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			questionValue: "",
			answerValue: "0",
		};
	}

	setDefaultState = () => {
		this.setState({
			questionValue: "",
			answerValue: "0",
		});
	};

	//call calculate func. from this, so that the state can be updated
	updateState(valueParam) {
		//use setState to force a re-render
		//this seems repetitive, find a better way
		if (valueParam === "=") {
			this.setState({
				answerValue: decideOperator(valueParam, this.state.questionValue),
			});
		} else if (valueParam === "C") {
			this.setDefaultState();
		} else {
			this.setState({
				questionValue: decideOperator(valueParam, this.state.questionValue),
			});
		}
	}

	render() {
		return (
			<div className="calc-wrapper">
				<Screen
					//pass state as props to Screen
					questionValue={this.state.questionValue}
					answerValue={this.state.answerValue}
				/>
				<ButtonBox
					//in order for fchangeState to work, it needs to receive a value as an argument
					msgFunc={(valueParam) => this.updateState(valueParam)}
				/>
			</div>
		);
	}
}
export default Wrapper;

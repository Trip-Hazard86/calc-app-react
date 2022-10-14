import React from "react";
import "./Screen.css";

//Screen has props questionValue & answerValue
//the values of these are held in the state of Wrapper
class Screen extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="screen-wrapper">
				<div className="question-row">{this.props.questionValue}</div>
				<div className="answer-row">{this.props.answerValue}</div>
			</div>
		);
	}
}

export default Screen;

//enforce MVC system by keeping JS functions in here, exporting and importing as needed

export function setClass(buttonValues) {
	switch (buttonValues) {
		case "C":
			return "clear";
		case "CE":
			return "clear-entry";
		case ".":
			return "decimal-point";
		case "=":
			return "equals";
		case "+":
		case "-":
		case "/":
		case "X":
			return "ops";
		default:
			return "numeral";
	}
}

//need func in here to calculate what happens when diff values are received
//this func needs to update state
//import this function to wrapper

export function calculate(valueParam) {
	switch (valueParam) {
		case "C": {
			this.setState({ questionValue: "", answerValue: "" });
			break;
		}
		case "CE": {
			let questionStr = this.state.questionValue;
			questionStr = questionStr.substring(0, questionStr.length - 1);
			this.setState({ questionValue: questionStr });
			break;
		}

		case "=": {
			if (this.state.questionValue !== "") {
				let answerStr = "";
				answerStr = eval(this.state.questionValue);
				this.setState({ answer: answerStr, questionValue: "" });
				break;
			}
		}
		default: {
			this.setState({
				questionValue: (this.state.questionValue += valueParam),
			});
			break;
		}
	}
}

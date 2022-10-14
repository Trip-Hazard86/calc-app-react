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

//this func does NOT update the state...that is the job of f-changeValueFromState
//import this function to wrapper
//TODO - replace the setStates with returns

export function calculate(valueParam) {
	switch (valueParam) {
		case "C": {
			this.setState({ questionValue: "", answerValue: "" });
			break;
		}
		case "CE": {
			let questionStr = this.state.questionValue;
			questionStr = questionStr.substring(0, questionStr.length - 1);
			return questionStr;
		}

		case "=": {
			if (this.state.questionValue !== "") {
				let answerStr = "";
				answerStr = eval(this.state.questionValue);
				return answerStr;
			}
		}
		default: {
			questionValue = this.state.questionValue += valueParam;
			return questionValue;
		}
	}
}

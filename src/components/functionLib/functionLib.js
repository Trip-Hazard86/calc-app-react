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
		case "*":
			return "ops";
		default:
			return "numeral";
	}
}

//this func does NOT update the state...that is the job of f-changeValueFromState
//import this function to wrapper

export function decideOperator(valueParam, questionState) {
	switch (valueParam) {
		case "C": {
			return "";
		}
		case "CE": {
			let questionStr = questionState;
			questionStr = questionStr.substring(0, questionStr.length - 1);
			return questionStr;
		}
		case "=": {
			if (questionState !== "") {
				let answerStr = "";
				answerStr = eval(questionState);
				return answerStr;
			}
		}
		default: {
			let myQuestion = "";
			myQuestion = questionState += valueParam;
			return myQuestion;
		}
	}
}

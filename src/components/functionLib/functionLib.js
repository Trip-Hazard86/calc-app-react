//enforce MVC system by keeping JS functions in here, exporting and importing as needed

//TODO figure out why all buttons are clicked twice automatically when page is refreshed
export function msgButton(valueOfButton) {
	console.log(valueOfButton + " clicked!");
}

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

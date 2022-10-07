//enforce MVC system by keeping JS functions in here, exporting and importing as needed

export function msgButton() {
	console.log("clicked");
}

export function setClass(buttonValues) {
	switch (buttonValues) {
		case "=":
			return "equals";
		case "+":
		case "-":
		case "/":
		case "%":
			return "ops";
		default:
			return "button";
	}
}

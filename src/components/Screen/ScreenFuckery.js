//an example of how we can change the value displayed on the screen, in response to a button press
//this is hardcoded, our calc will need to be dynamic

this.state = {
	result: 0,
};

changeResult = () => {
	this.setState({ result: 10 });
};

{
	<button type="button" onClick={this.changeResult}></button>;
}

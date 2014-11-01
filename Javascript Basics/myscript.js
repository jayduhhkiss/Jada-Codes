// Functions store behaviours 

//console.log("Hello World");
var sayHello = function () {
	console.log("Hello World");
}

//takes in argument
var debug = function(message) {
	console.log("Debug", message);
}

var doubleNum = function(number) {
	return number * 2;
}

sayHello();
debug("hi");
debug(doubleNum(77))
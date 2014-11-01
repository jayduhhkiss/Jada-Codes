/*
* Arrays 
*/

var x = ["some", "many", "few", "all"];
console.log(x.length); // number of elements in array

var y = ['a string', 3, ["a sub array", 3, 4, 5, 6], "treehouse", function(a, b) {return a + b;}];
console.log(y.length);

var z = [];

// new array
var a = new Array();

// new array with 50 undefined elements
var b = new Array(50);

/*
* Getting + Setting 
*/

var myArray = ["Hello", 42, true, function(a){return a * 2}];

//get first item in the array
var word = myArray[0];
console.log(word);

//get the function
var doubler = myArray[3];
console.log(doubler(10));

// set new number
answer = myArray[1];
myArray[1] = -123
var new_answer = myArray[1];

/*
* Array Methods
*/

var my_array = [2, 3, 4];

// .toString() represents array as a string
console.log(my_array.toString());

// .push('element') adds element to the end of the array
my_array.push(5);
console.log(my_array.toString());

// .pop() returns the last value of the array & removes it
var poppedVar = my_array.pop();
console.log(poppedVar);
console.log(my_array.toString());

// .unshift() adds element to the beginning
my_array.unshift(4);
console.log(my_array.toString());

// .shift() returns first value and removes it
var shiftedVar = my_array.shift();
console.log(my_array.toString());
























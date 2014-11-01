/*
* Numbers
*/

// Whole Numbers
var a = 11 // 11.0
	b = -123; // -123.0

// Floating Point Numbers
var c = 1.5,
	d = 123.456789;

/*
* In JavaScript no matter what there is only
* one type of number. Floating point numbers
*/

var e = 0.1,
	f = 0.2; 

/*
* result
* 0.020000000000000004
* rounding errors from floating points operations
*/
var result = e * f;

/*
* Scientific Notiation (1 million)
*/
var g = 1000000;
var gCondensed = 1E6; 


/*
* Octal System 
* Each place represents a power of 8
* Starting with a 0 is an Octal Base
*/
var h = 012;

/*
* Hexidecimal System (Base-16)
* 0 - 9 & A - F
* 0x...
*/
var i = 0xf0;

/*
* Parsing Numbers from Strings
* We've been using numberical literals
* parseInt()
* parseFloat() ... gives floating point number
*/
var j = parseInt("197");
var k = "197";
var o = parseFloat(123.456);

// the second argument allows you to say it is base 10
var l = parseInt("019", 10);
var m = parseInt("010111", 2);

/*
* NaN = Not A Number
* NaN != NaN
*/
var n = parseInt("There are 23 people", 10);
console.log(isNaN(n));

/*
* Operations
*/

var add = 3 + 3;
var sub = n - o;
var mod = 6 % 2; 
var div = 4 / 5; 
var mul = 3 * 5;

/*
* Comparisons
*/

console.log(1 < 2);
console.log(1 > 2); 
console.log(1 <= 2);
console.log(1 >= 1);
console.log(1 === 1.0);
console.log(1 === 1.5);

// === checks value and type
console.log(1 === "1"); // false
console.log(1 == "1"); // true

if (1 < 2) {
	console.log("Yes");
}

else {
	console.log("No");
}

/*
* The Math Object
*
*/ 

// Returns random value between 0 - 1
var randomNum = Math.random();
var zeroThruTen = Math.round(Math.random()*10);

// Math.round = rounds normally
var rounds = Math.round(2.5);

// Math.floor = rounds down
var floor = Math.floor(2.5);

// Math.ceil = rounds up 
var ceil = Math.ceil(2.5);

// Math.pow = base , arg 
var power = Math.pow(2, 2);

// Math.sqrt 
var sq = Math.sqrt(54);







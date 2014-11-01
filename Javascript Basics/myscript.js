/*
* Comparing Strings
*/

var first = "Hello";
var second = "hello";

// Case Matters
if (first.toLowerCase() === second.toLowerCase()) {
	console.log("These strings are equal");
}

else {
	console.log("The strings are different");
}

function compare(a, b) {
	console.log(a + " < " + b, a < b);
}

// a < b true 
compare("a", "b");

// a < A false 
compare("a", "A");

// apples < oranges true 
compare("apples", "oranges");

// app < apples true 
compare("app", "apples");

// hello < hello false 
compare("hello", "hello");
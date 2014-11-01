/*
* String Concatenation (Addition of Strings)
*/

var part1 = "Hello ";
var part2 = "World!";
var whole = part1 + part2 + "!!!"; 
console.log(whole);

var line1 = "This is line1\n";
var line2 = "This is line2\n";
var line3 = "\tThis is line3";
var multiline = line1 + line2 + line3;
console.log(multiline);

/*
* Methods
*/

var length = whole.length;
console.log(length);

// Seeing if a string appears in another string
// The index #6 is the beginning of "World"
var index = whole.indexOf("World");
console.log(index);

// indexOf is case sensitive
// -1 ... can't find!
var index2 = whole.indexOf("world");
console.log(index2);

// is W there?
if (whole.indexOf("W") !== -1) {
	console.log("W exists in string");
}

else {
	console.log("W doesn't exist in string");
}

// charAt
console.log(whole.charAt(2));

// finding substring
// takes in the start index & the length of the string
var world = whole.substr(6, 5);
console.log(world);
console.log(world.toLowerCase());
console.log(world.toUpperCase());















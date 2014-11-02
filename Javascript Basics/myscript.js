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

/*
* Sorting Arrays
*/

var sort_array = [10, 44, 32, 100, 0, 44, 3, 4];
console.log(sort_array.toString());

// sorts numerically
sort_array.sort(function(a, b) {
	return a - b;
});
console.log(sort_array.toString());

// randomly sorted array
sort_array.sort(function(a, b) {
	return Math.random() - 0.5;
});
console.log(sort_array.toString());

// reverse array 
sort_array.reverse();
console.log(sort_array.toString());

/*
* Accessor Methods (Non Mutating)
*/

var mu = [1, 2, 3];
var ny = [4, 5, 6];

// concat (adds arrays by creating a new array)
var cat = mu.concat(ny);
var cat2 = mu.concat(10, 2, 34, 5, [3, 4, 3]);
console.log(cat);
console.log(cat2);

// slice (layer-via-copy)
var result = cat.slice(2,5);
console.log(result);

// join (new string of all the values)
// need to put space as join argument
// if phrase had objects that weren't 
//string it would call .toString() on them

var phrase = ["these", "are", "cool", "words"];
var full = phrase.join(" ");
console.log(full);

/*
* Splice Method
*/

var num_array = [0, 1, 2, 3, 4, 5, 6];
console.log(num_array);

/* 
* deletes the element at index 2, 
* but doesn't fill empty space
* delete num_array[2];
*/

/*
* splice(starting index, number of elements being removed)
*/
num_array.splice(2, 2);
console.log(num_array);

/*
* Using splice to insert
*/
num_array.splice(2, 0, "insert here");
console.log(num_array);

























































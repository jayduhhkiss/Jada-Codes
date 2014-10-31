// Object = A generic object - it has properties

var jada = {
	first_name: "Jada",
	middle_name: "Ashley",
	last_name: "Hawkins",
	"Employee Number": 1
}


//"Object" + "." + "key" accesses key
console.log(jada.middle_name);

//Must use subscript [] to access string keys
console.log(jada["Employee Number"]);

var key = "Employee Number";

console.log(jada[key]);
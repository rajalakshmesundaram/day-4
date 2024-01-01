// convert all the string in titlecaps in a string array using anonymous function
/*let titlecaps = function(str) {
	///Your code Starts here 
	let newstr = str.toLowerCase().split(" ")
	let result = []
	for (let ind in newstr) {
		result.push(newstr[ind].charAt(0).toUpperCase() + newstr[ind].slice(1))
	}
	
	return result
};
result = titlecaps("RAJI IS SMART GIRL")
console.log(result.join(" "))*/
// IIFE Function
let titlecaps = (function(str) {
	///Your code Starts here 
	let newstr = str.toLowerCase().split(" ")
	let result = []
	for (let ind in newstr) {
		result.push(newstr[ind].charAt(0).toUpperCase() + newstr[ind].slice(1))
	}
	
	console.log(result.join(" "))
})("RAJI IS SMART GIRL");


///Your code Ends here

/*
Lines For TestCase

addFive(5)
addFive(0)
addFive(-5)
*/
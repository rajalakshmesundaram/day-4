//sum of all numbers in an array using anonymous function
/*let sum = function(...arr) {
	///Your code Starts here 
	let total = 0;
	for (let val of arr) {
		total += val;
	}
	return total
};
console.log(sum(...[10, 20, 30]))*/
//IIFE Function
let sum = (function(...arr) {
	///Your code Starts here 
	let total = 0;
	for (let val of arr) {
		total += val;
	}
	console.log(total)
})(...[10, 20, 30]);



///Your code Ends here

/*
Lines For TestCase

addFive(5)
addFive(0)
addFive(-5)
*/
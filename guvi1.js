
// print odd numbers in an array using anonymous function
/*let odd = function(arr) {
	///Your code Starts here 
	let result = [];
	for (let val of arr) {
		if (val % 2 != 0) {
			result.push(val)
		}
	}
	return result
};

result = odd([20, 25, 61, 26, 13, 9])
console.log(result)*/
// IIFE method
let odd = (function(arr) {
	let result = [];
for (let val of arr) {
	
	if (val % 2 !== 0) {
		result.push(val)
	}
}

console.log(result)
}) ([20, 25, 61, 26, 13, 9]);




///Your code Ends here

/*
Lines For TestCase

addFive(5)
addFive(0)
addFive(-5)
*/
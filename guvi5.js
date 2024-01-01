//return all the palindrome in an array using anonymous function
/*let ispalindrome = function(str) {
	///Your code Starts here 
	let result = []
	for (let val of str) {
		let str1 = val.toLowerCase().split('')
		if (val === str1.reverse().join('')) {
			result.push(val)
		}
	}
	return result;
}
result = ispalindrome(["madam", "rose", "level", "racecar"])
console.log(result);*/
//IIFE function
let ispalindrome = (function(str) {
	///Your code Starts here 
	let result = []
	for (let val of str) {
		let str1 = val.toLowerCase().split('')
		
		if (val === str1.reverse().join('')) {
			
			result.push(val)
		}
	}
	console.log(result);
})(["madam", "rose", "level", "mam"]);



///Your code Ends here
/*
Lines For TestCase

addFive(5)
addFive(0)
addFive(-5)
*/
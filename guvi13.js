// return all the palindrome in an array using arrow function
let palindrome = (str) => {
	let result = []
	for (let val of str) {
		const newstr = val.toLowerCase().split('')
		if (val == newstr.reverse().join('')) {
			result.push(val)
		}
		
	}
	console.log(result);
};palindrome(["madam", "loop", "level", "ran", "racecar"])
///Your code Starts here 





///Your code Ends here

/*
Lines For TestCase

addFive(5)
addFive(0)
addFive(-5)
*/
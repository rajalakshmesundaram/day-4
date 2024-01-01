//print odd numbers in an array using arrow function
let odd = (arr) => {
	let result = [];
	for (let val of arr) {
		if (val % 2 != 0) {
			result.push(val)
		}
	}
	return result
}
console.log(odd([30, 5, 6, 9, 3, 1]))
///Your code Starts here 





///Your code Ends here

/*
Lines For TestCase

addFive(5)
addFive(0)
addFive(-5)
*/
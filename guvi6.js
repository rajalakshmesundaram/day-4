// return the median of two sorted array of same size
/*const median = function(num1, num2) {
	///Your code Starts here 
	const mergedarray = num1.concat(num2).sort((a, b) => a - b);
	const n = mergedarray.length
	if (n % 2 === 0) {
		const mid1 = mergedarray[n / 2 - 1]
		const mid2 = mergedarray[n / 2]
		return (mid1 + mid2) / 2;
	}
};
let result = median([2, 4, 5], [3, 1, 6])
console.log(result)*/
//IIFE
const median = (function(num1, num2) {
	///Your code Starts here 
	const mergedarray = num1.concat(num2).sort((a, b) => a - b);
	const n = mergedarray.length
	let medianans
	if (n % 2 === 0) {
		const mid1 = mergedarray[n / 2 - 1]
		const mid2 = mergedarray[n / 2]
		 medianans = (mid1 + mid2) / 2;
		return medianans
	}
	console.log(medianans)
})([2, 4, 5], [3, 1, 6]);



///Your code Ends here
/*
Lines For TestCase

addFive(5)
addFive(0)
addFive(-5)
*/
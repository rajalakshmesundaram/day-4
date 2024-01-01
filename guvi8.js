//rotate numbers by k times by using anonymous function
/*const rotatearray = function(arr, k) {
	///Your code Starts here 
	let n = arr.length
	k = k % n;
	let rotatedarray = arr.slice(n - k).concat(arr.slice(0, n - k))
	return rotatedarray
};
let originalarray = [1, 2, 3, 4, 5]
let rotationtime = 2;
let result = rotatearray(originalarray, rotationtime)
console.log(result)*/
//IIFE function
const rotatearray = (function(arr, k) {
	///Your code Starts here 
	let n = arr.length
	k = k % n;
	let rotatedarray = arr.slice(n - k).concat(arr.slice(0, n - k))
	
	console.log(rotatedarray)
})([1, 2, 3, 4, 5], 2);



///Your code Ends here
/*
Lines For TestCase

addFive(5)
addFive(0)
addFive(-5)
*/
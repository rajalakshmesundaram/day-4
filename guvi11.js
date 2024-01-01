// sum of all the numbers in the array using arrow function
let sum = (...arr) => {
	let total = 0;
	for (let val of arr) {
		total = total + val;
		
	}
	return total;
};
let arr =[10,20,30]
console.log(sum(...arr))
///Your code Starts here 





///Your code Ends here

/*
Lines For TestCase

addFive(5)
addFive(0)
addFive(-5)
*/
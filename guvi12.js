// return all the prime numbers in an array using arrow function
let prime = (arr) => {
	let result = []
	for (let ind in arr) {
		let indentify = (arr[ind])/2;
		let isprime = true;
		for (fact = 2; fact <= indentify; fact++) {
			if (arr[ind] % fact === 0) {
				isprime = false
				break;
			}
			
		}
		if (isprime && arr[ind] > -1) {
      result.push(arr[ind]);
    }
	}
	console.log(result)
};
prime([10, 21, 5, 11, 6, 13])
///Your code Starts here 





///Your code Ends here

/*
Lines For TestCase

addFive(5)
addFive(0)
addFive(-5)
*/
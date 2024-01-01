// return all prime number in an array
/*let isprime = function(arr) {
	let result = []
	
	///Your code Starts here 
	for(let ind in arr){
		let isprime = true;
	let indentify = (arr[ind])/ 2;
	for (let fact = 2; fact <= indentify; fact++) {
		if (arr[ind] % fact === 0) {
			isprime = false;
			break;
		}
	}
	if(isprime && arr[ind] >1)
	{
		 result.push(arr[ind]);
	}
}
	return result
};
let arr = isprime([25, 63, 52, 41, 13, 10, 11, 2, 1])

console.log(arr);*/
//IIFE function
let isprime = (function (arr) {
  let result = [];

  ///Your code Starts here
  for (let ind in arr) {
    let isprime = true;
    let indentify = arr[ind] / 2;
    for (let fact = 2; fact <= indentify; fact++) {
      if (arr[ind] % fact === 0) {
        isprime = false;
        break;
      }
    }
    if (isprime && arr[ind] > 1) {
      result.push(arr[ind]);
    }
  }
  console.log(result);
})([25, 63, 52, 41, 13, 10, 11, 2, 1]);







///Your code Ends here

/*
Lines For TestCase

addFive(5)
addFive(0)
addFive(-5)
*/
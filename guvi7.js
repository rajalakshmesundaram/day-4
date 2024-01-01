//remove duplicates from an Array using anonymous function
/*let removeduplicates = function(arr){

   let result = [];
	//Your code Starts here 
	for(let ind in arr){
		if (ind == arr.indexOf(arr[ind])) {
			result.push(arr[ind])
			
		}
	}
	return result;
};
let ans = removeduplicates([41, 52, 41, 35, 61, 52, 9, 6, 35])
console.log(ans);*/
//IIFE function
let removeduplicates = (function(arr) {
	let result = [];
	///Your code Starts here 
	for (let ind in arr) {
		if (ind == arr.indexOf(arr[ind])) {
			result.push(arr[ind])
			
		}
	}
	console.log(result)
})([41, 52, 41, 35, 61, 52, 9, 6, 35]);






///Your code Ends here

/*
Lines For TestCase

addFive(5)
addFive(0)
addFive(-5)
*/
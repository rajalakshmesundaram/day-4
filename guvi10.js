// convert all the string to titlecaps in a string array
let titlecap = (str) => {
	let newstr = str.toLowerCase().split(' ')
	let result = [];
	for (let ind in newstr) {
		result.push(newstr[ind].charAt(0).toUpperCase() + newstr[ind].slice(1))
	}
	console.log(result);
};
titlecap("raji is smart girl")

///Your code Starts here 





///Your code Ends here

/*
Lines For TestCase

addFive(5)
addFive(0)
addFive(-5)
*/
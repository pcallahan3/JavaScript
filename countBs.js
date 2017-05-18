/**
 *Write a function countBs that takes a string as its only argument and returns
 *a number that indicates how many uppercase “B” characters are in the string.
 */



function countBs (string) {
	//counter
	var counter = 0;
	//loop through each letter of the string 
	for (var i = 0; i < string.length; i++) {
		//add 1 to the counter if charAt 
		if (string.charAt(i) === 'B') {
			counter += 1;
		}
	}

	//return counter
	return counter;
}
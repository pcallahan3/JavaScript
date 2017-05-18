/**
 *Write the countChar function (and the code needed to test it) described on page 56 ("Bean Counting") in your text.
 **/



function countChar (stringToCount, letterToCount) {
	//counter
	var counter = 0;
	//loop through each letter of the string 
	for (var i = 0; i < stringToCount.length; i++) {
		//add 1 to the counter if charAt at i == letterToCount
		if (stringToCount.charAt(i) == letterToCount) {
			counter += 1;
		}
	}

	//return counter
	return counter;
}
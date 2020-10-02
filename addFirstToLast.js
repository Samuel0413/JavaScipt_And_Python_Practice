function addFirstToLast(inputArray) {
	let ret = '';
	if (inputArray.length > 0) {
	    ret = inputArray[0] + inputArray[inputArray.length - 1];
	} 
	return ret;
}
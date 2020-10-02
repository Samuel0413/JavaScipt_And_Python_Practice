function getFirstAmountSorted(inputArray, num) {
	sortedArray = inputArray.sort();
	retArray = sortedArray.slice(0, num);
	return retArray;
}

const newArray = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);
console.log(newArray);  // << should print out ['apple', 'bat']
function scan(arrayString) {
	const targ = 'contraband';
	let retArray = [];
	for (let i = 0; i < arrayString.length; i++) {
		if (arrayString[i] == targ) {
			retArray.push(i);
		}
	}
	return retArray;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const indexes = scan(['contraband', 'apples', 'cats', 'contraband', 'contraband']);
console.log(indexes); // should be [1, 4]

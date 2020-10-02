function scan(los) {
	const targ = 'contraband';
	let count = 0;
	for (let i = 0; i < los.length; i++) {
	    if (los[i] == targ) {
	        count++;
	    }
	}
	return count;
}
function calculatePower(aon) {
	let Adjusted_aon = aon.map(item => item*2);
	return Adjusted_aon.reduce((sum, current) => sum + current, 0);
}

const laserPower = calculatePower([1, 3, 8]);
console.log('Required laser power is ' + laserPower); // should be 24

function calculateMass(aos) {
	//ret = aos.reduce((sum, current) => sum + current, 0);
	function sum(acc, cur) {
		return acc + cur.length;
	}
	return aos.reduce(sum, 0);
}

const cargo = ['cat', 'dog', 'donkey'];

const mass = calculateMass(cargo);
// mass should now be 10
console.log(mass);

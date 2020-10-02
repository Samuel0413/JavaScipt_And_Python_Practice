class Ducktypium {

	constructor(color) {
		if (color == 'red' || color == 'blue' || color == 'yellow') {
			this.color = color;
			this.calibrationSequence = [];
		} else {
			throw 'ERROR';
		}
	}

	refract(str) {
		if (str == 'red' || str == 'blue' || str == 'yellow') {
			if (this.color == str) {
				return str;
			}
			if ((str == 'red' && this.color == 'blue') ||
				(str == 'blue' && this.color == 'red')) {
				return 'purple';
			} else if ((str == 'red' && this.color == 'yellow') ||
				(str == 'yellow' && this.color == 'red')) {
				return 'orange'
			} else {
				return 'green';
			}
		} else {
			throw 'ERROR';
		}
	}

	calibrate(aon) {
		let sorted_aon = aon.sort();
		sorted_aon = sorted_aon.map(item => item*3);
		this.calibrationSequence = sorted_aon;
	}

}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]

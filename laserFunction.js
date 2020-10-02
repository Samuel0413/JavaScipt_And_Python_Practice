function invertLaserSetting(input) {
	if (input == 'OFF') {
		return 'ON';
	} else if (input == 'ON') {
		return 'OFF';
	} else {
		console.log('Please enter the current laser setting as \'ON\' or \'OFF\'!');
		return 'NaN';
	}
}	

function getLaserSetting() {
	const setting = 'OFF';
	return setting;
}

const inputString = process.argv[2];
const currentLaserSetting = String(inputString);
console.log('The currentLaserSetting is ' + currentLaserSetting);
console.log('The invert of the current laser setting is ' + invertLaserSetting(currentLaserSetting));
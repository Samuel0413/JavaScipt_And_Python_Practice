function getLaserSetting(inputSetting) {
	if (inputSetting == 'please') {
		return 'OFF';
	} else {
		return 'ON';
	}
}

const input = process.argv[2];
const inputSetting = String(input);
console.log(inputSetting);
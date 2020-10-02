function scanAndFilter(aos, str) {
	function notFilter(ele) {
		return ele != str;
	}
	return aos.filter(notFilter);
}

const cargo = ['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'];

const filteredCargo = scanAndFilter(cargo, 'ray guns');
console.log(filteredCargo)
// filteredCargo should now be ['apples', 'oranges', 'tacos']


function mutate(aos) {
	return aos.map(item => item.toUpperCase());
}

const cargo = ['apples', 'ray guns', 'oranges'];

const mutatedCargo = mutate(cargo);
// mutatedCargo should now be ['APPLES', 'RAY GUNS', 'ORANGES']
console.log(mutatedCargo);
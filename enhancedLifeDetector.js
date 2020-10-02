const input = Number(process.argv[2]);
if (input == 0) {
    console.log('alive');
} else if (input == 1) {
    console.log('flowering');
} else if (input == 2) {
    console.log('shedding');
} else {
    console.log('other');
}
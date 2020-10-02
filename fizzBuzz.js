const input = parseInt(process.argv[2]);
const mod3 = (input % 3);
const mod5 = (input % 5);

if (mod3 == 0 && mod5 == 0) {
    console.log('JavaScript');
} else if (mod3 == 0) {
    console.log('Java');
} else if (mod5 == 0) {
    console.log('Script');
} else {
    console.log(input);
}
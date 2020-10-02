const cmd1 = String(process.argv[2]).toLowerCase();
const cmd2 = String(process.argv[3]).toLowerCase();
if (cmd1 < cmd2) {
    console.log('%d', -1);
} else if (cmd1 == cmd2) {
    console.log('%d', 0);
} else {
    console.log('%d', 1);
}
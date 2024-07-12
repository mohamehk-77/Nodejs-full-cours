// globals - no window !!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (commonJS)
// module - info about current module (file)
// process - info about env where the program is being executed
// console.log - prints to console
// setTimeout - sets a timer
// setInterval - sets a timer that repeats
// clearImmediate - clears a timer

console.log(__dirname);
console.log(__filename);

setTimeout(() => {
    console.log("This is correct");
}, 1000);

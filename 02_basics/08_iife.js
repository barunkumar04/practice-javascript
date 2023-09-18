
(function iife1() {
    console.log("IIFE from normal function");
})(); // ; is must. this stops control flow here.

// using arrow 

(() => {
    console.log("IIFE from arrow function");
})();

(function iife1(type) {
    console.log(`IIFE from ${type} function`);
})("normal"); // ; is must. this stops control flow here.

// using arrow 

((type) => {
    console.log(`IIFE from ${type} function`);
})("arrow");

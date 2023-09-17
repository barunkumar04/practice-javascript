
if(true){
    let a = 100;
    const b = 200;
    var c = 300;
    d = 400;
}

// Trying to acces outside of block scope
console.log(d); // This was not supposed to be printed. But, IT HAS!! Limitation of var
console.log(c); // Same problem as above.
// console.log(b); // Error, as expceted
// console.log(a); // Error, as expected


console.log(functionA()); // Accessible

function functionA(){
    console.log("from functionA");
}

console.log(functionB()); // Error - ReferenceError: functionB is not defined

const varFunctionB = function functionA(){
    console.log("from functionA");
}


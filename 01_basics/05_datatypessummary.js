// Primitive: 7 types
    // String, Boolean, Number, null, undefined, Symbol, BigInt

// Reference (Non Primitive)
    // Array, Objects, Function


let id = Symbol(1001);
let anotherId = Symbol(1001);

console.log(typeof id); // type of symbol
console.log(id == anotherId); // false because reference is diffrent.

// Non Primitive

const states = ["Bihar", "Karnataka", "Kerala"]
console.log(states);

let me = {
    name : "Barun",
    age: 30,
    place: "Bengaluru"
}

console.log(me);

const myFun = function() {
    console.log("Hello from function");
};

console.log(typeof myFun);
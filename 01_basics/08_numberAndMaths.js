
const looksLikeANumber = 400;

console.log(looksLikeANumber);

const strictlyNumber = new Number(400)
console.log(strictlyNumber);

console.log(strictlyNumber.toFixed(2)); // 400.00
console.log(strictlyNumber.toString());
console.log(typeof strictlyNumber.toString());

let anotherNumber = 123.876

console.log(anotherNumber.toPrecision(4)); // 123.9
console.log(anotherNumber.toPrecision(3)); // 124

anotherNumber = 123.467
console.log(anotherNumber.toPrecision(3)); // 123
console.log(typeof anotherNumber.toPrecision(3)); // String


const amount = 1000000
console.log(amount.toLocaleString()); //1,000,000 by defaultfollows US Standards
console.log(amount.toLocaleString('en-IN')); //10,00,000 converted to Indian standards

console.log("------------------------ Maths ---------------------------------");

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(43.8));

console.log(Math.random()); //always between 0 to 1
console.log((Math.random() * 10 )+ 1); //To bring a absolute value, +1 to avoid 0

// Random value generator between min and max

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 )) + min);
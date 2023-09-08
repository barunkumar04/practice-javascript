const firstName = "Barun"
const lastName = "Kumar"

console.log(firstName+ " "+lastName); // This is outdated and suggested not to use

console.log (`Hello my name is ${firstName} ${lastName}.`); // Suggested , called String Interpolation

const gameName = new String ('Badminton')

console.log(gameName[0]);
console.log(gameName.__proto__); // This is a object

console.log(gameName.__proto__.length); // This is actual syntax
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('d'));

// More method
// subString
// slice // accept -ve values (starts fron last index)
// Trim
// replace
// include // equivalent to contains() of Java

// Imp - refer browser's console log prototype or documentation
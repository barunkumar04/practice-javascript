let score = "35"
console.log(typeof score);

let scoreInNumber = Number(score)
console.log(typeof scoreInNumber)


let marks = "70abc"
let marksInNumber = Number(marks)
console.log(typeof marksInNumber) // its says number!! How come??

// Lets check it's value
console.log(marksInNumber) // NaN -> Not a number


let grade = null
let gradeInNumber = Number(grade)
console.log(typeof gradeInNumber) // its says number!! How come??

// Lets check it's value
console.log(gradeInNumber) // null is converted to zero.

let percentage = undefined
let percentageInNumber = Number(percentage)
console.log(typeof percentageInNumber) // its says number!! How come??

// Lets check it's value
console.log(percentageInNumber) // undefined is converted to NaN.

// "33" -> 33
// "33abc" -> NaN
// true -> 1
// false -> 0

let isLoggedIn = 1;

let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn)

// 1 -> true
// 2 -> false
// "" -> True
// "AString" -> False


/******************* * * * Operations * * * **********************/
console.log(1+"2"); // 12
console.log("1"+2); // 12
console.log("1" + "2"); // 12
console.log("1" + 1 + 2); //112
console.log(1 + 1 + "2"); // 22
console.log(1 + 1 + "2" + 1 + 1); // 2211

// These conversion rule is written here - https://tc39.es/ecma262/#sec-type-conversion
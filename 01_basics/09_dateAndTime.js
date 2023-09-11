// Different types of date declarations

let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

// Speficit Date

let customDate = new Date(2023, 0, 23);

console.log(customDate);
console.log(customDate.toString());
console.log(customDate.toDateString());
console.log(customDate.toLocaleString());

let customDateWithTime = new Date(2023, 0, 23, 5, 5);

// console.log(customDateWithTime);
// console.log(customDateWithTime.toString());
// console.log(customDateWithTime.toDateString());
console.log(customDateWithTime.toLocaleString());


let anotherCustomDate = new Date("2023-01-25");

console.log(anotherCustomDate);
console.log(anotherCustomDate.toString());
console.log(anotherCustomDate.toDateString());
console.log(anotherCustomDate.toLocaleString());

// Timestamp - Used in projects like polls, quizes

let currentTimeStamp = Date.now() // This is in millisecond

console.log(currentTimeStamp);
console.log(myDate.getTime());

// Customizaiton and Internalization - Zone 

let aDate = new Date();

console.log(aDate);
aDate.toLocaleString('default', {
    weekday : "long"
})
console.log(aDate);

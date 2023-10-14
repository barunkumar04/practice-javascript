// Problem statement - Change the value of PI to 4. PI is an constant defined in Math. Default value is 3.141592653589793

// Lets see its value
console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI); // Didn't change.

const descriptorOfPI = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptorOfPI)
 
// Output: 
//     {
//     value: 3.141592653589793,
//     writable: false, // Note, writable is false. That's why we can not
//     enumerable: false,
//     configurable: false
//   }

Object.defineProperty(Math, 'PI', {writable: true})

const descriptorOfPIAfterChange = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptorOfPIAfterChange)

// Outcome, We can not change value of PI.
// Error - TypeError: Cannot redefine property: PI
// normal fn vs arrow fn
// 'this' used in noraml function -  there is context availble
// 'this' used in arrow function - there is no context

const normalFn = function (){
    console.log(this);
}

const arrowFn = () =>{
    console.log(this);
}

normalFn(); // lots of context info
arrowFn(); // {}

// implicit return examples

const addNumbers = (num1, num2 ) => (num1+num2)

console.log(addNumbers(3, 4));


// Lets make 'name' property non-changable

const employee = {
    name : "Barun",
    age : 34,
    location : "Bengaluru",

    printMe: function(){
        console.log(`${name}, ${age}, ${location}`);
    }

};

console.log(employee);

// Lets check descriptpor
const employeeDecriptor = Object.getOwnPropertyDescriptor(employee, 'name');
console.log(employeeDecriptor); 
// Notice,  writable: true 7 enumerable: true. Thats why we can set another value and also iterate it.

// Making it non modifiable.
Object.defineProperty(employee, 'name', {
    writable: false,
    enumerable: true,
})

// Trying to change value
employee.name = 'Vicky';
console.log("After writable change - ", employee); // Name is still 'Barun'

// Making it non enumerable.
Object.defineProperty(employee, 'name', {
    writable: false,
    enumerable: false,
})

console.log("After enumrable change - ", employee); // Name is not getting printed.

// Lets check for all properties

for (let [k, v] of Object.entries(employee)) {
    if(typeof v !== 'function'){
        console.log(`${k} - ${v}`);
    }
}
// Name is not getting printed

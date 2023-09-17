// Destructuring obejcts - ways to access properties

const customer = {
    id: "1001",
    customerName : "Heera Takur",
    balance :  100000000
}

const {customerName} = customer
const {customerName : name} = customer

console.log(customerName);
console.log(name);

// Note: This concept will be used in react
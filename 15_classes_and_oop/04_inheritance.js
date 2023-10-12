
// Old apporach
const Customer = {
    name : "Manek",
    customerAddress : "#123, Assi Ghat, Varanasi."
}

const Account = {
    type : "Savings",
    __proto__:Customer // Now, Account has properties of Customer.
}

// New approach
Object.setPrototypeOf(Customer, Account); // But, internaly it works same as old approach.

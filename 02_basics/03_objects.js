// Tow way tto decalare a obejct
// Literal - 
// Singleton - If created using constructor. Object.create()

const aUser = {
    name : "Barun",
    "full name": "Barun Kumar",
    age : 18,
    location : "Bengaluru",
    email : "barun@mail.com"
}

// This has created using Literal method
// Ways to access a property

console.log(aUser.name);
console.log(aUser["full name"]); // for such properties, [] method is the only way to go

// Lets use a Symbol

let aSymbol = Symbol("SymbolKey");

const anotherUser1 = {
    name : "Barun",
    "full name": "Barun Kumar",
    age : 18,
    location : "Bengaluru",
    email : "barun@mail.com",
    aSymbol : "Ace"
}

// Lets access this.
console.log(anotherUser1.aSymbol); // Ace - This is correct
console.log(typeof anotherUser1.aSymbol); // BUT, this is string, it suppose to be a Symobl!!

// Correct to declare symbol
const anotherUser2 = {
    name : "Barun",
    "full name": "Barun Kumar",
    age : 18,
    location : "Bengaluru",
    email : "barun@mail.com",
    [aSymbol] : "Ace" // Notice here
}

console.log(anotherUser2[aSymbol]); // Ace - This is correct
console.log(typeof anotherUser2[aSymbol]); // Now, this is Symbol, it suppose to be a Symobl!!
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
console.log(typeof anotherUser1.aSymbol); // BUT, this is string, it suppose to be a Symbol!!

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

// Canging values and freeze

anotherUser2.email = "barunkumar@gmail.com"
console.log(anotherUser2);

Object.freeze(anotherUser2);

anotherUser2.email = "barunkumar@changedmail.com"
console.log(anotherUser2); // Not changed, it remained barunkumar@gmail.com

// Method

aUser.greeting = function(){
    console.log(`Hello ${this["full name"]}`);
    return ""; // If no return, then an extra undefined will be printed
}

console.log(aUser.greeting());

// Recap of Object types

// Object nesting

let customer = {
    id : "1001",
    name : {
        "first name" : "Sam",
        "last name" : "Wilson"
    },
    address : {
        pin : 1234587,
        location : {
            xcoordinate : 34.87,
            ycoordinate : 87.98
        }
    }
};

console.log(customer); // 3 level of nesting

// Object merging

const object1 = {1:"a", 2:"b"};
const object2 = {3:"a", 4:"b"};

const object3 = {object1, object2};

console.log(object3); // Notice, its not merged and this is not ieal way to merge object{ object1: { '1': 'a', '2': 'b' }, object2: { '3': 'a', '4': 'b' } }

// Suggested way is to use assign or spread operator
// Syntax: Object.assign(targetObject, sourceObject1, sourceObject2, sourceObject3)

const mergedObject = Object.assign({}, object1, object2)
console.log(mergedObject);

const mergedObjectUsingSpread = {...object1, ...object2}
console.log(mergedObjectUsingSpread);

// when obejects is a array

console.log(Object.keys(aUser));
console.log(Object.values(aUser));
console.log(aUser.hasOwnProperty("location"));
// Premitive dataype goes to stack
// non-premitive get allcoated to heap

// Operation on premitive dataype

let aName = "Tony"
let anotherName = aName

anotherName = "Bob"; // Gets assigned to a copy of anotherName in stack memory.

console.log(aName); // Tony
console.log(anotherName); // Bob


// Operation on Non-premitive

let aUser = {
    name : "aName",
    email : "123@abc.com"
}

let anotherUser = aUser;

anotherUser.email = "456@abc.com"

console.log(aUser.email) // 456@abc.com
console.log(anotherUser.email); // 456@abc.com
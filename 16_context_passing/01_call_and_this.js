
function setName(name){
    this.name = name;
    console.log("setName called and value to name in this method is ", this.name);
}

function setUserProperties(name, age, gender){

    setName(name);
    this.age = age;
    this.gender = gender;
}

const aUser = new setUserProperties("Barun", 34, "Male");

console.log(aUser); 

/**
 *  Notes - 
 *      1. Name 'Barun' is printed here. Output - setUserProperties { age: 34, gender: 'Male' }
 *      2. Name is being passed to setName method, we can see the log - setName called and value to name in this method is  Barun
 *      3. What as happend here?
 *          - Remeber call stack? Yes, call stack/context is lost when control come out of setName() 
 *          - So are values. Lost!
 */

// How to solve it - call & this.

function setUserPropertiesAgain(name, age, gender){

    setName.call(this, name); // Notice changes here.
    this.age = age;
    this.gender = gender;
}

const anotherUser = new setUserPropertiesAgain("Barun", 34, "Male");
console.log(anotherUser); // Output: setUserPropertiesAgain { name: 'Barun', age: 34, gender: 'Male' }
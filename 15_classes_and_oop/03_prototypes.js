// Problem statement - Have a method called 'helloBarun' for any thing we declare .

Object.prototype.helloBarun = function(){
    console.log('Hello Barun!');
}

const aString = "Barun";
aString.helloBarun();

const anArray = [10, 20, 30];
anArray.helloBarun();


// Problem Statement - Trim any space of a string and retrn true count.
String.prototype.trueLength = function(){
    console.log(`True length of string ${this} is ${this.trim().length}`);
}

const myName = "Barun    ";
myName.trueLength();


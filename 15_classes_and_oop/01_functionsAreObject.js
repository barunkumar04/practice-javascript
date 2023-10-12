function addTen(number){
    return number + 10;
}

addTen.power = 32;
console.log(addTen.power);

console.log(typeof addTen.prototype); // i.e. object
console.log(typeof addTen.prototype.prototype); // i.e. undefined
// console.log(typeof addTen.prototype.prototype.prototype); // Error, as object is top most and last one.
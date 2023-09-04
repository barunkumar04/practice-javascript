console.log( 2 > 1 );
console.log( 2 >= 1 );

console.log( 2 < 1 );
console.log( 2 <= 1 );

console.log( 2 == 1 );
console.log( 2 != 1 );

console.log( "2" > 1 ); // "2" automatically converted to number
console.log( "02" > 1 ); // Same as above

console.log( null > 0 ); // false, null is converted to zero. 0 > 0 
console.log( null == 0 ); 
console.log( null >= 0 ); // true, null is converted to zero. 0 >= 0
// comparison and equality check work diffrently


// Strict checking, datatype check is alos performed
console.log( "2" ==  2 ); // true
console.log("2" === 2); // false
# Notes

## Documentations

1. Specification - https://tc39.es/ecma262/
2. JS documentation (form Mozilla) - https://developer.mozilla.org/en-US/docs/Web/JavaScript

## To revist

1. Javascript execution and code context
2. Object destructure

## Spread operator (dot dot dot)
1. Written as '...'
2. Very useful and accepted in merging array and object. Refer corresposing js files for more

## Rest operator (dot dot dot again)
1. This is also written as '...'
2. Uses is same as varargs of java.
3. I.e. used as function parameter which can accept any numuber of arguments of same type

## Scope - Local and Global
- var and default variable doesn't follow scoping. LIMITAITON!!
- Mini Hoisting

## 'this' in normal function and arraw function

## IIFE (Immidiately Invoked Function Expression)
- Syntax: 
    (<function body>) ();
- Example:
    (function (){ 
        console.log("Immidiately Invoked Function")
    }) ();
- Uses cases:
    - DB connection
    - To avoid getting function scope populated from global scope 
- Keep in mind
    - Semi-colon at the end is MUST!!
    - Named IIFE = normal function
    - Unnamed IIFE = arrow function

## JS code exection and call stack 
- https://www.youtube.com/watch?v=ByhtOgF6uYM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=25 
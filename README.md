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

## DOM - Dcoument Object Model
- Creator of JS: Brendan Eich (https://en.wikipedia.org/wiki/Brendan_Eich)
- Way to access a sits's document in Browser's console log
    - Element ID is required for accessing an element of DOM
    - console.log(windows.document)
    - console.log(document)
    - console.dir(document) # lists out a complete properties
    - Give me URL of the page
        -   console.log(document.baseURI)
        -   Output: https://en.wikipedia.org/wiki/Brendan_Eich
    - Give me all the links of page
        - console.log(document.links)
        - Output is an array like collection
    - Heading of this wiki page
- DOM Manipulation
    -  Get the heading
        console.log(document.getElementById('firstHeading'))
        output - Brendan Eich
    - Amend
        document.getElementById('firstHeading').innerHTML = "```<h1>Exploring DOM<h1>```"
        Output - On the page, you would see Brendan Eich has replaced with "Exploring DOM"


### Documents component hierarchy
- Refering one.html here
- Hierachy 
    -  window
        - document
            -  HTML
                -  Head
                    -  Title
                    -  Meta
                -  Body
                    - div
                        - h1
                        - P

### DOM Selector 

#### textContent, innerText & innerHTML
- innerText: get only visible text and skips any CSS or styling
- textContent: get all text, even though there is any styling done
- innerHTML: Gets information incluing html tags

- Example:  Lets consider title tag from one.html - 
    
    ```<h1 id = "title" class="heading" >Exploring DOM <span style="display: none;">  of JavaScript</span></h1>```

    - console.log(document.getElementById("title").innerText) : Exploring DOM
    - console.log(document.getElementById("title").textContent) : Exploring DOM   of JavaScript
    - console.log(document.getElementById("title").innerHTML) : Exploring DOM ```<span style="display: none;">  of JavaScript</span>```

#### querySelector





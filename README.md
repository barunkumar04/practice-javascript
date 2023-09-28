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

- HTML snippet

    ```
        <body class="bg-black">
        <div>
            <h1 id = "title" class="heading"> Exploring DOM <span style="display: none;">  of JavaScript</span></h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <h2>1-Lorem ipsum dolor sit amet.</h2>
            <h2>2-Lorem ipsum dolor sit amet.</h2>
            <input type="password">
            <ul>
                <li>l1-1 Lorem ipsum dolor sit amet.</li>
                <li>l1-2 Lorem ipsum dolor sit amet.</li>
                <li>l1-3 Lorem ipsum dolor sit amet.</li>
            </ul>
        </div>
        </body>
    ```
- seleting h2-tag: 
    - console.log(doument.querySelector("h2")); 
    - Output - ```<h2>1-Lorem ipsum dolor sit amet.</h2>``` 
    - Notice - It selects only the first h2 tag
- selecting first list item and some manipulation
    - const firstLI = document.querySepector("li")
    - firstLI.style.color = "orange"
    - firstLI.style.borderRadius = "25px"

#### querySelectorAll
    - Selects all tags passed as input
    - We need to use this if we want to select or manipulate other that first tag
    - Lets manipulate 2nd LI

        const secondLI = document.querySelectorAll("li")[1]
        secondLI.style.color = "blue"
        secondLI.style.borderRadius = "30px"
    - Lets iterate and manipulate
        
        const allLI = document.querySelectorAll("li")
        
        allLI.forEach(function (l) {
            l.style.backgroundColor = "blue"
        }) 

#### getElementByClassName
    - It return a HTMLCollection, not array. 
    - To access foreach, map etc, we must convert to Array, as HTMLCollection doesn't have such properties
    const allLI = document.getElementsByClassName("list-item")
    ## allLI is not a Array, but a HTML Collection. So we can not apply forEach etc. 
    ## converting to Array

    const allLIInArray = Array.from(allLI)
    allLIInArray.forEach(function (li){
        li.style.color = "red"
    })

### DOM Tree and element select/edit/add/delete
Refer DOM_Tree.html files

## Projects - Refer projects folder in source code.

## Events
- JS executes sequencialy. But, event allows to execute code on event. Like, click, mousedrag, mouseover etc.
- Ways to add a event on tag
    1. Alter the html tag itself and define evetn. But, this is NOT Recemmonded when scale.For example - 
        ```
            <li><img width ="500px" height="300px" src="./pics/TheMightyOne.jpg" alt="TheMightyOne" id="TheMightyOne'" onclick="alert('Ant clicked!')"></li>
        ```
    2. Get element and apply event.
        ```
            document.getElementById('TheMightyOne').onclick = function(){
                alert("Ant clicked!!")
            }
        ```
    3. Add using listner - Recemmonded Way
        ```
            document.getElementById('TheMightyOne').addEventListener('click', function(){
                alert("Ant clicked from listner!!")
                }, false)
        ```
- Few important events to know
    - type
    - timestamp
    - defaultPrevented. Notice, we have used it.
    - target
    - toElement
    - srcElement
    - currentTarget
    - clientX and clientY, screenX, screenY. [INTERVIEW]
    - altKey, ctrlKey, shiftKey, keyCode

- Event Propagation [INTERVIEW]
    - Types
        1. Event Bubbling
            - Like a bubble, bottom to up.
            - This is default.
            - Example:
                ```
                    document.getElementById('myclicks').addEventListener('click', function(event){
                        console.log("Clicked - Image Folder")
                    }, false);

                    document.getElementById('ThousandSwards').addEventListener('click', function(event){
                        console.log("Clicked - ThousandSwards")
                    }, false)

                    // Clicking on grass image. Console output is:
                    // Clicked - ThousandSwards
                    // Clicked - Image Folder
                ```
        2. Event Capturing 
            - Top to bottom
            - Example:
            ```
                    document.getElementById('myclicks').addEventListener('click', function(event){
                        console.log("Clicked - Image Folder")
                    }, true);

                    document.getElementById('ThousandSwards').addEventListener('click', function(event){
                        console.log("Clicked - ThousandSwards")
                    }, true)

                    // Clicking on grass image. Console output is:
                    // Clicked - Image Folder
                    // Clicked - ThousandSwards
             ```
    - To stop propagation add this: event.stopPropagation();

    

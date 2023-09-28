// lets select 
//  - buttons - will pick color  
//  - body - to apply that color as background

const allButtons = document.querySelectorAll(".button");
//console.log(allButtons);
const body = document.querySelector("body");


allButtons.forEach(function(button){
    button.addEventListener('mouseover', function(event){
        body.style.backgroundColor = button.id;
    })
})

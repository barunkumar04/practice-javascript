
const aTimeOutFunction = function(){
    setTimeout(function(){
        console.log("Code sequnce #1 -> from setTimeout.");
    }, 1000);
};

aTimeOutFunction();

fetch('https://api.github.com/users/barunkumar04')
.then(function(responsePromise){
    return responsePromise.json();
}).then((jsonResponse) =>{
    console.log("Code sequence #2 -> from fetch", jsonResponse.company);
});

/**
 * Notice, output here - 
 *      Code sequence #2 -> from fetch J.P. Morgan
 *      Code sequnce #1 -> from setTimeout.
 * 
 * Why sequence#2 has executed before sequence #1??     
 *   - Fetch follow a priority execution.
 *   - Refer here for insight (importent) - https://www.youtube.com/watch?v=Rive84an6Lc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=41
 *   
 *   - if we reduce wait time from 1000 ms to 10 ms (may be), then there is chance that sequecen#1 would get executed first.
 * */
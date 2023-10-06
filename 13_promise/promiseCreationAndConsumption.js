
// Creating a promise without parameter pass
const firstPromise = new Promise(function(resolve, reject){
    //do a async task. Eg - DB call, cryptography, network call etc
    setTimeout(function(){
        console.log('Async task has completed.');
        resolve(); // Mind this. This is required to consume.
    }, 1000);
});

// consuming promise
firstPromise.then(function(){
    console.log("First Promise consumed, no paramter!");
})


// Creating a promise without parameter pass
new Promise(function(resolve, reject){
    //do a async task. Eg - DB call, cryptography, network call etc
    setTimeout(function(){
        console.log('Async task has completed.');
        resolve(); // Mind this. This is required to consume.
    }, 1000);
}).then(function(){
    console.log("Second Promise consumed, no paramter!");
})

// Creating a promise with parameter pass
const thirdPromise = new Promise(function(resolve, reject){
    //do a async task. Eg - DB call, cryptography, network call etc
    setTimeout(function(){
        console.log('Async task has completed.');
        resolve({name : "Barun", age:"34"}); // Mind this. This is required to consume.
    }, 1000);
});

// consuming promise
thirdPromise.then(function(user){
    console.log("Third Promise consumed, with parametetr!");
    console.log(user);
})
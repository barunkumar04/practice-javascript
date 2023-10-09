
fetch('https://api.github.com/users/barunkumar04')
.then((responsePromise) => {
    return responsePromise.json();
}).then((jsonResponse) => {
    console.log(jsonResponse);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("In finally block");
});
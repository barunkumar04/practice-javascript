
// Creating promise that connect to DB
const dbConnPromise = new Promise(function (resolve, reject){
    setTimeout(function(){
        const hasConnected = false; // some code to connect DB
        if(!hasConnected){
            reject('ERROR: Failed to connect DB');
        }else{
            resolve({DB : "Oracle", message:"Connection Successful!"});
        }
    }, 1000);
});


// Consuming promise and chaining

// retreving all messages
dbConnPromise.then(function(connectionMessage){
    console.log('DB connection has established!');
    return(connectionMessage.DB); // passing to next then
}).then(function(db){
    console.log(`Connected to ${db} database.`);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Finally Block - DB connection task has completed.");
});

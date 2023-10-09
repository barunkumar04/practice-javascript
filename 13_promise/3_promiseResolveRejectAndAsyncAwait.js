
// Creating promise that connect to DB
const dbConnPromise = new Promise(function (resolve, reject){
    setTimeout(function(){
        const hasConnected = true; // some code to connect DB
        if(!hasConnected){
            reject('ERROR: Failed to connect DB');
        }else{
            resolve({DB : "Oracle", message:"Connection Successful!"});
        }
    }, 1000);
});


// Consuming promise using async-await

async function consumeDBConnection(){
    try {
        const response = await dbConnPromise; 
        console.log(response);
    } catch (error) {
        console.log('Error occured!');
    }
};


consumeDBConnection();
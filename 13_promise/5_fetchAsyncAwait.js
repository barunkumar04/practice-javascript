
async function getGitHubProfile(){
    try {
        const requestURL = 'https://api.github.com/users/barunkumar04';

        const responsePromise = await fetch(requestURL);
        const data = await  responsePromise.json(); 
        // Note - We must put 'await' here, as json() takes time and data is not ready yet.
    
        console.log(data)
    
    } catch (error) {
        console.log("Error - ", error);
    }
}

getGitHubProfile();
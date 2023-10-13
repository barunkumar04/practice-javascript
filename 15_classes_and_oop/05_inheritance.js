
class User{

    constructor (username){
        this.username = username;
    }

    // Same as 'static' of Java
    static setUserId(){
        this.userId = Math.floor(Math.random() * 100);
        console.log(`User id set as ${this.userId}`);
    }

    printUserInfo(){
        console.log(`User Name is ${this.username}.`);
    }

}

class Pilot extends User{

    constructor(username){
        super(username)
    }
}

const aPilot = new Pilot("Anshu");
aPilot.printUserInfo();
// aPilot.setUSerId(); // Not accessable, not inheriated.
// Pilot.setUserId(); // Not accessable, not inheriated.

const aUser = new User("Admin");
aUser.printUserInfo();
// aUser.setUSerId();// Not accessable.
User.setUserId(); // // Accessable and can be accessed only using Class name.

class Scientiest{
    constructor(name, dept){
        this.name = name;
        this.dept = dept;
    }

    get name(){
        console.log("getter called");
        // return this.name;
    }
    set name(name){
        console.log("setter called");
        // this.name = name;
    }
}

const pawan = new Scientiest("Pawan", "Engineering"); 

// if this.name = name get uncommented

// RangeError: Maximum call stack size exceeded
//     at console.value (node:internal/console/constructor:308:13)
//     at console.log (node:internal/console/constructor:379:26)
//     at set name [as name] (/workspaces/practice-javascript/15_classes_and_oop/06_getter_setter.js:12:17)
//     at set name [as name] (/workspaces/practice-javascript/15_classes_and_oop/06_getter_setter.js:13:19)

console.log(pawan.name); 

// if return this.name get uncommented

// RangeError: Maximum call stack size exceeded
//     at Readable.removeListener (node:internal/streams/readable:933:45)
//     at console.value (node:internal/console/constructor:312:16)
//     at console.log (node:internal/console/constructor:379:26)
//     at get name [as name] (/workspaces/practice-javascript/15_classes_and_oop/06_getter_setter.js:8:17)
//     at get name [as name] (/workspaces/practice-javascript/15_classes_and_oop/06_getter_setter.js:9:21)
//     at get name [as name] (/workspaces/practice-javascript/15_classes_and_oop/06_getter_setter.js:9:21)
//     at get name [as name] (/workspaces/practice-javascript/15_classes_and_oop/06_getter_setter.js:9:21)


class Teacher{
    constructor(name, dept){
        this.name = name;
        this.dept = dept;
    }

    get name(){
        console.log("getter called");
        return this._name;
    }
    set name(name){
        console.log("setter called");
        this._name = name;
    }
}

const rakesh = new Teacher("Teacher", "Maths"); 
console.log(rakesh.name); 
// Push, concat, spread and Flat

// Push
const languages = ["JS", "JAVA", "C++"];
const tools = ["eclipse", "ItilliJ", "Netbeans"]

languages.push(tools); // appends at last. This is not a good way to merge

console.log(languages);

console.log(languages); //[ 'JS', 'JAVA', 'C++', [ 'eclipse', 'ItilliJ', 'Netbeans' ] ]
console.log(tools); // [ 'eclipse', 'ItilliJ', 'Netbeans' ]


// concat
const languages1 = ["JS", "JAVA", "C++"];
const tools1 = ["eclipse", "ItilliJ", "Netbeans"]

const all = languages1.concat(tools1);

console.log(all);

// spread
const languages2 = ["JS", "JAVA", "C++"];
const tools2 = ["eclipse", "ItilliJ", "Netbeans"]

const all2 = [...languages2, ...tools2]; // can take multiple values

console.log(all2);

// Flat

const nestedArray = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
const flatArray = nestedArray.flat(Infinity);
console.log(flatArray);
console.log(typeof flatArray)

console.log(Array.isArray("AString"));
console.log(Array.from("AString"));

console.log(Array.from( {name : "Barun"})) // Interview | We need to isntruct, to make array from key or value

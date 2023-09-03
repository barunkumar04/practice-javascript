console.log("Why so late Barun!! Any ways, Der aaye durust aaye :)")

const accountId = 1001
let accountEmail = "barun@gmail.com" 
var accountPassword = "12345" // var is not suggested to use due to issue in block and functional scope.
accountCity = "Bihar Sharif"
let accountState;

// accountId = 2001 // Constants can not be changed
accountEmail = "barunk@gamil.com"
accountPassword = "11111"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
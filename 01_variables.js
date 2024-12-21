// This is a constant variable called 'accountId' with a value of 144553
// 'const' means its value cannot be changed
const accountId = 144553;

// This is a variable called 'accountEmail' with a value of "hitesh@google.com"
// 'let' means its value can be changed later
let accountEmail = "hitesh@google.com";

// This is a variable called 'accountPassword' with a value of "12345"
// 'var' is an older way to declare variables, but it's not recommended to use it
var accountPassword = "12345";

// This is a variable called 'accountCity' with a value of "Jaipur"
// It is declared without 'let', 'const', or 'var', making it a global variable, which is not recommended
accountCity = "Jaipur";

// This is a variable called 'accountState' without an initial value
let accountState;

// Trying to change 'accountId' will cause an error because it's a constant
// accountId = 2 // not allowed

// Changing the values of 'accountEmail', 'accountPassword', and 'accountCity'
accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

// This prints the value of 'accountId' to the console
console.log(accountId);

/*
It's better not to use 'var' because it can cause problems with how variables are used in different parts of the code
*/

// This prints a table of the account details to the console
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


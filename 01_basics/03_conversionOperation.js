// Define a variable 'score' and assign it the number 10
//let score = 10;
// Print the type of 'score' (which is a number) to the console
//console.log(`The type of score is: ${typeof score}`);

// Change the value of 'score' to the string "10"
//score = "10gc";
// Print the type of 'score' (which is now a string) to the console
//console.log(`The type of score is: ${typeof score}`);

// Convert the string 'score' to a number and store it in 'valueNumber'
//let valueNumber = Number(score);

// Print the type of 'valueNumber' (which is a number) to the console
//console.log(`The type of valueNumber is: ${typeof valueNumber}`);

//console.log(valueNumber); // 10

// Convert the number 'valueNumber' to a string and store it in 'valueString'
let valueNumber = 10; // Define a variable 'valueNumber' and assign it the number 10
let valueString = valueNumber.toString(); // Change 'valueNumber' to a string
//console.log(valueString); // Print the string "10" to the console (commented out)
//console.log(`The type of valueString is: ${typeof valueString}`); // Print the type of 'valueString' (which is a string) to the console (commented out)

// Convert a boolean to a string or number
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let loggedin = "surssh"; // Define a variable 'loggedin' and assign it the string "surssh"
let loggedinbool = Boolean(loggedin); // Change 'loggedin' to a boolean (true or false)
//console.log(loggedinbool); // Print 'true' to the console because non-empty strings are true (commented out)
//console.log(`The type of loggedinbool is: ${typeof loggedinbool}`); // Print the type of 'loggedinbool' (which is a boolean) to the console (commented out)

// *********************** Operations ***********************

let value1 = 10; // Define a variable 'value1' and assign it the number 10
let value2 = -value1; // Define a variable 'value2' and assign it the negative of 'value1'
//console.log(value2); // Print the number -10 to the console (commented out)

// Basic arithmetic operations (commented out)
// console.log(2+2); // Addition: prints 4
// console.log(2-2); // Subtraction: prints 0
// console.log(2*2); // Multiplication: prints 4
// console.log(2**3); // Exponentiation: prints 8
// console.log(2/3); // Division: prints approximately 0.6667
// console.log(2%3); // Modulus (remainder): prints 2

// String concatenation
let str1 = "suresh"; // Define a variable 'str1' and assign it the string "suresh"
let str2 = "Kumar"; // Define a variable 'str2' and assign it the string "Kumar"
let str3 = str1 + str2; // Join 'str1' and 'str2' together and store the result in 'str3'
//console.log(str3); // Print the joined string "sureshKumar" to the console (commented out)

//console.log("1" + 2); // Join the string "1" and the number 2 (commented out)
//console.log(1 + "2"); // Join the number 1 and the string "2" (commented out)
//console.log("1" + 2 + 2); // Join the string "1" and the numbers 2 and 2 (commented out)
// console.log(1 + 2 + "2"); // Add the numbers 1 and 2, then join the result with the string "2" (commented out)

//console.log( (3 + 4) * 5 % 3); // Calculate (3 + 4) * 5, then find the remainder when divided by 3 (commented out)

// console.log(+true); // Change true to the number 1 (commented out)
// console.log(+""); // Change an empty string to the number 0 (commented out)

let num1, num2, num3; // Define three variables: num1, num2, and num3

num1 = num2 = num3 = 2 + 2; // Assign the result of 2 + 2 to num1, num2, and num3

let gameCounter = 100; // Define a variable 'gameCounter' and assign it the number 100
--gameCounter; // Decrease 'gameCounter' by 1
console.log(gameCounter); // Print the number 99 to the console

// Link to study more about type conversion in JavaScript
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
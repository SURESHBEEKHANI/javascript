// Primitive data types and Non-primitive data types
// Primitive types store the actual value; non-primitive types store a reference to the value.

// Primitive data types
// 7 types of primitive data types: string, number, bigint, boolean, undefined, symbol, and null.
// These are called "primitive" because they are immutable and cannot be changed.

const score = 100; // Define a constant variable 'score' with a value of 100
const scoreValue = 100.3; // Define a constant variable 'scoreValue' with a value of 100.3

const isLoggedIn = false; // Define a constant variable 'isLoggedIn' with a value of false
const outsideTemp = null; // Define a constant variable 'outsideTemp' with a value of null
let userEmail; // Declare a variable 'userEmail' without an initial value

const id = Symbol('123'); // Define a constant variable 'id' with a unique symbol value '123'
const anotherId = Symbol('123'); // Define another constant variable 'anotherId' with a unique symbol value '123'

console.log(id === anotherId); // Print 'false' to the console because symbols with the same description are unique

// const bigNumber = 3456543576654356754n; // Define a constant variable 'bigNumber' with a large integer value (commented out)

// Non-primitive data types
// 3 types of non-primitive data types: object, function, and array.
// Objects in JavaScript are collections of key-value pairs. The keys are strings, and the values can be any data type, including other objects.
// Functions are objects that can be invoked. They can be assigned to variables, passed as arguments, and returned from other functions.
// Arrays are objects that store multiple values in a single variable. They are similar to lists in other programming languages.

const heros = ["shaktiman", "naagraj", "doga"]; // Define an array 'heros' with three string elements
let myObj = {
    name: "hitesh",
    age: 22,
}; // Define an object 'myObj' with properties 'name' and 'age'

const myFunction = function() {
    console.log("Hello world");
}; // Define a function 'myFunction' that prints "Hello world" to the console

console.log(typeof anotherId); // Print 'symbol' to the console
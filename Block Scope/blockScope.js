// Advance JavaScripts
// Scopes and Clouser

// const win = require("global");

// 4 Type of scopes , block, functional , module, global

//Block scope

// let a = 100;
// let b = 0;

// // {
// //   let x = 0;
// //   let y = 1;
// //   console.log(x);
// //   x = 6;s
// // }   Re-Declaration not allowed but Re-assignment allow

// {
//   let a = 2;
//   let c = 0;
// }

// function say() {
//   let a = 4;
// }

// Module Object :- This defines the two javascript file can clash so in script tag
{
  /* <script src="Filename" type="module"></script>; */
}

//Global Object

// console.log(window);
// console.log(2);

// ("use strict");

//Functional Scope

// function sayHi(name) {
//   return name;
// }

// sayHi("moiz");

//Lexical Enviorment

// let name = "john";

// console.log(name);

// Hoisting

// Function defination are also be hoisted

//Closures /// Closure is function within the func

// function createUser(name) {
//   let greeting = "Hi";
//   function greet() {
//     return greeting + " " + name + " is Created";
//   }
//   return greet;
// }

// let welcomeJohn = createUser("john");

// console.log(welcomeJohn());

// function initCounter() {
//   let count = 0;
//   return function () {
//     count++;
//   };
// }

// let counter = initCounter();

// console.log(counter(), counter());

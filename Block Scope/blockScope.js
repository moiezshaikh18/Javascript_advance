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

// console.log(counter());

// IIFE

// (function () {
//   var x = 1;
// })();

// Currying Function

// function op(operation) {
//   return function (a) {
//     return function (b) {
//       return operation === "add" ? a + b : a - b;
//     };
//   };
// }

// const op = (operation) => (a) => (b) => operation === "add" ? a + b : a - b;

// console.log(op("add")(10)(9));

// let log = (time) => (type) => (message) =>
//   `At ${time}: severity ${type} ${message}  `;

// console.log(log(new Date())("error")("Power Not Sufficient"));

///Object Reference

// let person = { name: "john" };
// let human = person;

// person;
// human;

// person = { name: "wick" };

// person;
// human;

// let person = {
//   name: "John",
//   address: {
//     city: "pune",
//     state: "maharashtra",
//   },
// };

//Copying of object

// let person = {
//   name: "John",
//   address: {
//     city: "pune",
//     state: "maharashtra",
//   },
// };

//Using Object Assign

// let obj1 = {};

// Object.assign(obj1, person);

// obj1;

//Using Spread Operators

// let obj1 = { ...person };

// obj1;

//Using Deep Copy

// let obj1 = JSON.stringify(person);

// obj1;

// let o = JSON.parse(obj1);

// o;

// Using Structured Clone

// let obj1 = structuredClone(person);

// obj1;

// This Keyword and Methods

// let person = {
//   name: "John",
//   sayHi: function () {
//     return "hi" + this.name;
//   },
//   address: {
//     city: "pune",
//     state: "maharashtra",
//   },
// };

// person.sayHi();

//Symbol Data Type

// let person = {
//   0: "John",
//   sayHi: function () {
//     return "hi" + this.name;
//   },
// };

// let id = Symbol("id");

// let person = {
//   [id]: "John",
//   sayHi: function () {
//     return "hi" + this.name;
//   },
// };

// person;

//Function as objects

// sayHi();
// function sayHi(greet) {
//   return greet;
// }

// sayHi("john");

// sayHi.x = 1;

// function Person(name) {
//   this.name = name;
// }

// const p = new Person("name");
// p;

// const funcEx = function fx(user) {
//   if (user) {
//     return "hello" + "  " + user;
//   } else {
//     return fx("undefined");
//   }
// };

// let b = funcEx();
// b;

//Decorators Pattern

// function heavy(x) {
//   console.log(x + ":heavy");
//   return x + ":heavy";
// }

// function memoizer(fx) {
//   let map = new Map(); // hashmap

//   return function (x) {
//     if (map.has(x)) {
//       return map.get(x);
//     } else {
//       let result = fx(x);
//       map.set(x, result);
//       return fx(x);
//     }
//   };
// }

// let momoized = memoizer(heavy);

// momoized(4);
// momoized(4);
// momoized(44);
// momoized(66);
// momoized(6);

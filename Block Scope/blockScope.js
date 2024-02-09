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

//Call , Apply, Bind

// let person = {
//   name: "Moiz",
//   age: 30,
//   live: "Pune",
// };

// function checkName(a, ...b) {
//   console.log(!!this.name, a, b);
//   return !!this.name; //Boolean convert
// }

// person.check = checkName;

// person.check();

// checkName.call(person, 1);

// checkName.apply(person, [1, 1, 2, 3]);

// let fh = checkName.bind(person);

// fh();

// let task = {
//   name: "demo",
//   heavy(x) {
//     console.log(x + ":heavy:" + this.name);
//     return x + ":heavy" + this.name;
//   },
// };

// function memoized(fx) {
//   let map = new Map();
//   return function (x) {
//     if (map.has(x)) {
//       return map.get(x);
//     } else {
//       let memoValue = fx.call(this, x);
//       map.set(x, memoValue);
//       return memoValue;
//     }
//   };
// }
// task.memoizedHeavy = memoized(task.heavy);
// task.memoizedHeavy(1); // 1:heavyundefined
// task.memoizedHeavy(2);

//Debouncing

// let count = 1;
// function showCount() {
//   count++;
//   console.log({ count });
// }

// function debounce(fx, time) {
//   let id = null;
//   return function (x) {
//     if (id) {
//       clearTimeout(id);
//     }
//     id = setTimeout(fx, time, x);
//   };
// }

// // let showCountD = debounce(showCount, 2000);
// // showCount();

// const el = document.getElementById("text1");
// const logo = document.getElementById("text-output1");
// el.addEventListener(
//   "keyup",
//   debounce(function (e) {
//     logo.innerText = e.target.value;
//   }, 1000)
// );

//Throttling

// function throtal(fx, time) {
//   let id = null;
//   let args = [];
//   return function (x) {
//     if (!id) {
//       id = setTimeout(fx, time, args[args.length - 1]);
//       id = null;
//     }
//     args.push[x];
//   };
// }

// // let showCountT = throtal(showCount, 3000);
// // showCount();

// function sayHi() {
//   console.log("hi");
// }
// document.addEventListener("scroll", throtal(sayHi, 1000));

//Iterable and Generators

// let range = {
//   start: 0,
//   end: 5,
//   [Symbol.iterator]() {
//     let that = this;
//     let i = that.start;
//     return {
//       next() {
//         return {
//           value: i,
//           done: i++ > that.end,
//         };
//       },
//     };
//   },
// };

// for (const iterator of range) {
//   iterator;
// }

// let num = [1, 2, 3];

// let it = num[Symbol.iterator]();

// it.next();

//Map-----------------

// let map = new Map();

// let person = { name: "john" };

// let personAccount = { balance: 500 };

// map.set(1, "str1");
// map.set(person, personAccount);

// let m = map.get(person);

// let obj = { a: 3, b: 5, c: 6 };

// let map = new Map(Object.entries(obj));

// let d = [...map.entries()];

// Generators

// function* generatorFunction() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let generator = generatorFunction();
// generator.next();
// generator.next();
// generator.next();
// generator.next();

// function* generator() {
//   let i = 0;
//   while (true) {
//     yield i;
//     i++;
//   }
// }

// let g = generator();

// let f = g.next();

//Prototypes

//Protypical Inheritance

// let animal = { eats: true };

// let dog = { bark: true };

// let animal = {
//   eats: true,
//   walks() {
//     return "Walks";
//   },
// };

// dog.__proto__ = animal;

// console.log(dog);

//Constructor , .prototype , Methods

// let usr = {
//   name: "john",
// };

// function User(name) {
//   this.name = name;
// }

// let user = new User("moiz"); // here 'user' is instance

// console.log(User.prototype);
// console.log(User.prototype.constructor === User);

// console.log(user.__proto__);
// console.log(user);

//Use case of Prototype

// function User(name) {
//   this.name = name;
// }

// User.prototype.sayHi = function () {
//   return this.name;
// };

// let user1 = new User("Wick");

// console.log(user1.sayHi()); // 'Wick'

// A usefull method : Reversing String

// function User(name) {
//   this.name = name;
// }

// User.prototype.reverseName = function () {
//   return this.name.split("").reverse().join("");
// };

// let user1 = new User("Moiz");

// console.log(user1.reverseName()); // Methods are available at instance of constructor

// let animal = {
//   eats: true,
//   walk() {
//     return "walks";
//   },
// };

// function Dog() {
//   this.barks = true;
// }

// Dog.prototype = animal;

// let dog = new Dog();

// dog.walk();

//Native Prototype

// console.log(Object.prototype, Array.prototype, Function.prototype);

//Primitives as Objects

// String.prototype;

//Polyfillls

// polyfills is a way of providing futuristic API not avaialable in browser

// if (!Array.prototype.contains) {
//   Array.prototype.contains = function (searchElement) {
//     return this.indexOf(searchElement) >= 0 ? true : false;
//   };
// }

// let a = ["moiz", "here", "mahesh"];

// console.log(a.contains("moiz"));

//Static properties

// Those method which are not on prototype it directly on object those called
//Static properties

//Class Syntax(Syntactic Sugar)

// Prototype Version

// function User(name) {
//   this.name = name;
// }

// User.prototype.sayHi = function () {
//   return this.name;
// };

// let user = new User("moiz");

// user.sayHi(); //Moiz

// Class Version

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return this.name;
  }
}

let user = new User(); // user is the insatance of Class

console.log(user.sayHi("Rahul"));

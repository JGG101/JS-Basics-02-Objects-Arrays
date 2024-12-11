// OBJECT AND ARRAYS

// 1. CREATING AND ACCESSING OBJECTS
// An object in JavaScript is a collection of key-value pairs. You can create objects using object literals or constructor functions.

// Creating an Object
// 1.1 Object literal syntax

// You can access properties of an object using 
// a. dot notation: console.log(person.name);  => "John"
// b. bracket notation: for dynamic keys, console.log(person['age']);  => 30.
// c. Accessing method: person.greet();  => "Hello, John"

let person = {
    name: "John",
    age: 30,
    greet: function() {
      console.log("Hello, " + this.name);
    }
  };

console.log(person);
console.log(person.name);
console.log(person['age']);
person.greet();


  // 1.2 Constructor function syntax
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = 'Hello ' + name;
  }
  
  let person2 = new Person("Jane", 25);
  console.log(person2);
  console.log(person2.name);
  console.log(person2['age']);
  console.log(person2.greet);


// 2. ARRAYS AND ARRAY METHODS
// An array is an ordered list of values, and JavaScript arrays are dynamic, meaning they can grow or shrink.

// Creating an Array
// You can access elements of an array using indexing (indexes start from 0).

// Array literal
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers[0]);  // 1

let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);

// Constructor syntax
// let colors = new Array('red', 'blue', 'green');
// console.log(colors[2]);  // 'green'

let colors = new Array('red', 'blue', 'green');
console.log(colors[2]);

// Common Array Methods:
//     a. push(): Adds an element to the end of the array.
//     b. pop(): Removes the last element of the array.
//     c. shift(): Removes the first element of the array.
//     d. unshift(): Adds an element to the beginning of the array.
//     e. map(): Transforms each element in the array.
//     f. filter(): Filters elements in the array.
//     g. forEach(): Loops through each element in the array.

// let numbers = [1, 2, 3, 4, 5];

// numbers.push(6); // Adds 6 to the end
// numbers.pop(); // Removes 6 from the end
// numbers.shift(); // Removes 1 from the start


// push()
// let numberss = [1, 2, 3, 4, 5];
// numberss.push(6);
// console.log(numberss);

let numberss = [1, 2, 3, 4, 5];
numberss.push(6);

console.log(numberss); // Adds an element to the end of the array.

// pop()
// let pulled = [1, 2, 3, 4, 5]
// pulled.pop();
// console.log(pulled);

let pulled = [1, 2, 3, 4, 5];
pulled.pop();

console.log(pulled); // Removes the last element of the array.

// shift()
// let shifts = [1, 2, 3, 4, 5];
// shifts.shift();
// console.log(shifts);

let shifts = [1, 2, 3, 4, 5];
shifts.shift();

console.log(shifts); // Removes the first element of the array.

// unshift()
// let unshifted = [1, 2, 3, 4, 5];
// unshifted.unshift(0);
// console.log(unshifted);

let unshifted = [1, 2, 3, 4, 5];
unshifted.unshift(0);

console.log(unshifted); // Adds an element to the beginning of the array.

// map()
// let doubled = [1, 2, 3, 4, 5];
// let doubledNumbers = doubled.map(num => num * 2);
// console.log(doubledNumbers);

let doubled = [1, 2, 3, 4, 5];
let doubledNumbers = doubled.map(num => num * 2);

console.log(doubledNumbers); // Transforms each element in the array.

// let squared = [1, 2, 3, 4, 5];
// let squaredNumbers = squared.map(num => num * num);
// console.log(squaredNumbers);

let squared = [1, 2, 3, 4, 5];
let squaredNumbers = squared.map(num => num * num);

console.log(squaredNumbers);

// let stringed = [1, 2, 3, 4, 5];
// let stringedNumbers = stringed.map(num => `Number: ${num}`);
// console.log(stringedNumbers);

let stringed = [1, 2, 3, 4, 5];
let stringedNumbers = stringed.map(num => `Number: ${num}`);
console.log(stringedNumbers);

// let indexed = [1, 2, 3, 4, 5];
// let indexedNumbers = indexed.map((num, index) => num + index);
// console.log(indexedNumbers);

let indexed = [1, 2, 3, 4, 5];
let indexedNumbers = indexed.map((num, index) => num + index);
console.log(indexedNumbers);

// Filter()
// let even = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let evenNumbers = even.filter(num => num % 2 === 0);
// console.log(evenNumbers);

let even = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumbers = even.filter(num => num % 2 === 0);

console.log(evenNumbers); // Filters elements in the array.

// let greater = [1, 2, 3, 4, 5]
// let greaterNumbers = greater.filter(num => num > 3);
// console.log(greaterNumbers);

let greater = [1, 2, 3, 4, 5];
let greaterNumbers = greater.filter(num => num > 3);

console.log(greaterNumbers);

// let mixed = [1, null, 3, 5, null]
// let filterArr = mixed.filter(value => value != null);
// console.log(filterArr);

let mixed = [1, null, 3, 5, null];
let filterArr = mixed.filter(value => value != null);

console.log(filterArr);

// let words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// let filteredWords = words.filter(word => word.includes('e'));
// console.log(filteredWords);

let words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let filteredWords = words.filter(word => word.includes('e'));

console.log(filteredWords);



// 3. ITERATING OVER ARRAYS AND OBJECT
// You can loop through arrays and objects using a variety of methods:

// 3.1 Iterating Over Arrays

// for loop: Classic method to iterate over an array.
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
//     }

let fruits = ['apple', 'banana', 'cherry', 'grape'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// map(): Creates a new array with the results of calling a function on every element.
// let numbersSquared = numbers.map(number => number * number);
// console.log(numbersSquared);  // [1, 4, 9, 16, 25]

let numbersSquared = numbers.map(number => number * number);
console.log(numbersSquared);

// for...of: A more modern loop that iterates over the values directly.
// for (let fruit of fruits) {
//     console.log(fruit);
//   }

for (let fruit of fruits) {
  console.log(fruit);
}

  
// 3.2 Iterating Over Objects

// for...in: Iterates over the keys of an object.
// for (let key in person) {
//     console.log(key + ": " + person[key]);
//   }

for (let key in person) {
  console.log(key + " " + person[key]);
}


// Object.keys(): Returns an array of an object's keys, which you can iterate over.
// Object.keys(person).forEach(key => {
//     console.log(key + ": " + person[key]); 
//   });

Object.keys(person).forEach(key => {
  console.log(key + " " + person[key]);
});


// Object.values(): Returns an array of an object's values.
// Object.values(person).forEach(value => {
//     console.log(value);
//   });

Object.values(person).forEach(value => {
  console.log(value);
});


// Object.entries(): Returns an array of [key, value] pairs.
// Object.entries(person).forEach(([key, value]) => {
//     console.log(key + ": " + value);
//   });

Object.entries(person).forEach(([key, value]) => {
  console.log(key + " " + value);
});



// SUMMARY
// I. Objects: Store key-value pairs and can contain methods.
//     I.A Created with {} (literal) or using constructors.
//     I.B Access properties via dot notation or bracket notation.

// II. Arrays: Store ordered lists of values, and the values can be of any type.
//     II.A Created with [] (literal) or using the Array() constructor.
//     II.B Use methods like push(), pop(), shift(), and forEach() to manipulate and iterate.

// III. Iteration:
//     III.A Arrays: Use for, forEach(), map(), for...of.
//     III.B Objects: Use for...in, Object.keys(), Object.values(), Object.entries().

// Mastering objects and arrays is crucial for effective programming in JavaScript, as they are foundational to working with structured data.
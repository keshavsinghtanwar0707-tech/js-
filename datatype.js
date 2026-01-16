"use strict"; // strict mode

// Output
console.log("Hello");
console.log(3 + 3);
console.log("Keshav");

// JavaScript Data Types
// 7 Primitive + 1 Non-Primitive (Object)

// Number
let length = 16;
let weight = 7.5;

// BigInt
let xBigInt = 1234567890123456789012345n;
let yBigInt = BigInt("1234567890123456789012345");

// String
let color = "Yellow";

// Boolean
let isActive = true;
let isCompleted = false;

// Undefined
let xUndefined;

// Null
let xNull = null;

// Symbol
const xSymbol = Symbol("id");

// View all values
console.table({
  length,
  weight,
  xBigInt,
  yBigInt,
  color,
  isActive,
  isCompleted,
  xUndefined,
  xNull,
  xSymbol
});
const num = 5;

num = 6;

// Object
const person = {
  firstName: "John",
  lastName: "Doe"
};

person.firstName = 'akram';

// Array (Object type)
const cars = ["Saab", "Volvo", "BMW"];

// Date Object
const date = new Date("2022-03-25");

console.log(person, cars, date);
console.table([date ])

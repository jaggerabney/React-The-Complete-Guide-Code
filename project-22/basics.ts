// There are two main kinds of types in TypeScript:

// Primitives: number, string, boolean
// Object-based: arrays, objects

// -----------------------------------------------------

// Primitive types

let age: number;
age = 12; // okay
age = 12.2; // also okay
// age = "12"; // NOT okay

let username: string;
username = "Jagger"; // okay

let isInstructor: boolean;
isInstructor = false; // okay

// -----------------------------------------------------

// Object-based types

let hobbies: string[];
hobbies = ["Video games", "Programming", "Cooking"];

let person: {
  name: string;
  age: number;
};
person = {
  name: "Jagger",
  age: 22,
}; // okay
// person = {
//   isEmployee: false,
// }; // NOT okay

let people: {
  name: string;
  age: number;
}[];
people = [
  {
    name: "Jagger",
    age: 22,
  },
  {
    name: "Kira",
    age: 20,
  },
]; // okay

// -----------------------------------------------------

// Type inference

// TypeScript infers which types are used where, even if not explicitly stated
// Kind of like the "auto" keyword in C++
let course = "React - The Complete Guide";
// course = 12341;

// -----------------------------------------------------

// Union types

// Variables of a union type can be either specified type of variable
// i.e., course2 can be either a string or a number
let course2: string | number = "React - The Complete Guide Code";
course2 = 12341;

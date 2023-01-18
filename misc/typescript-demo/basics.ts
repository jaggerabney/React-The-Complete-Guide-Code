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

// -----------------------------------------------------

// Type aliases

// You can specify a custom type using a type alias like so:
type Person = {
  name: string;
  age: number;
};

let person2: Person = {
  name: "Max",
  age: 32,
};

// You can even used aliased types for arrays and the like
let people2: Person[] = [
  {
    name: "Bob",
    age: 42,
  },
  {
    name: "Barbara",
    age: 39,
  },
  {
    name: "Jackson",
    age: 16,
  },
];

// -----------------------------------------------------

// Functions and types

// Types can be specified not only for function parameters,
// but also for function return values as well
function subtract(a: number, b: number): number {
  return a - b;
}

// Functions that return no value have a type of void
function printValue(value: any): void {
  console.log(value);
}

// These types do NOT have to be explicitly declared;
// TypeScript will infer them based on the contents of the
// function itself

// -----------------------------------------------------

// Generic types

// Sometimes, using the any type can lead to problems
// For example: the below function works, but it is not staticly
// typed like other TypeScript variables
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
// updatedArray[0].split("");

// TypeScript is not able to tell that the type of demoArray is number[],
// and so it'll let us call the split function on it, leading to a runtime exception

function insertAtBeginningGeneric<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

// With a generic type, TypeScript is able to preserve the type of the array/value
// going into it; thus, we can keep TypeScript-related features

const demoArrayGeneric = [1, 2, 3];
const updatedArrayGeneric = insertAtBeginningGeneric(demoArray, -1);
// updatedArrayGeneric[0].split("");
// ^ This will lead to a compilation error, as it should

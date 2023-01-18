// Primitives: number, string, boolean
// Object-based: arrays, objects

// Primitive types

let age: number;
age = 12; // okay
age = 12.2; // also okay
// age = "12"; // NOT okay

let username: string;
username = "Jagger"; // okay

let isInstructor: boolean;
isInstructor = false; // okay

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

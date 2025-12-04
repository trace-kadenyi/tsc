// type aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// Literal types
// unchangeable
let myName: "Tracey Kadenyi";

// strictly only the listed names
let userName: "Trace" | "Bruce" | "Bruno" | "Colleta";
userName = "Bruce";

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

// console.log(add(4, 5));

// no return
const logMsg = (message: any): void => {
  console.log(message);
};

// logMsg("Hello!");
// logMsg(add(2, 3));

// !== arrow function
let subtract = function (c: number, d: number): number {
  return c - d;
};

// logMsg(subtract(49, 18));

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};

const division: mathFunction = (d, f) => {
  return d / f;
};

const addition: mathFunction = (t, x) => {
  return t + x;
};

logMsg(multiply(134, 6));
logMsg(division(64, 8));
logMsg(addition(6, 7));

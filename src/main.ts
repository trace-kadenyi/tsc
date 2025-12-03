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


logMsg('Hello!')
logMsg(add(2, 3))
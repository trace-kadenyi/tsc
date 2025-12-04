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

// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

const division: mathFunction = (d, f) => {
  return d / f;
};

const addition: mathFunction = (t, x) => {
  return t + x;
};

// logMsg(multiply(134, 6));
// logMsg(division(64, 8));
// logMsg(addition(6, 7));

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// default param value
const sumAll = (a: number, b: number, c = 2): number => {
  return a + b + c;
};

// option 2 for default param value
const sumAll2 = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};
// logMsg(addAll(1, 2, 3));
// logMsg(addAll(4, 6));
// logMsg(sumAll(1, 2));
// logMsg(sumAll2(undefined, 5))

// REST PARAMS
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

// logMsg(total(1, 2));

// NEVER TYPE
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  // endless loop/never type
  while (true) {
    i++;
    // console.log(i);
    // solution = return type:void
    if (i === 100) break;
  }
};

// logMsg(infinite());

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of the never type
const numberOrString = (value: string | number): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";

  return createError("This should NEVER happen");
};

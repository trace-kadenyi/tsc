type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

// angle brackets
let d = <One>"world";
let e = <string | number>34;

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): string | number => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

console.log(nextVal);
console.log(myVal);

// 10 as string; WRONG
10 as unknown as string;

// THE DOM

// HTMLImageElement
// - This uses non-null exclamation mark to tell TS the image exists
const img = document.querySelector("img")!;
// - OR we can explicitly state HTMLImageElement as below
const img2 = document.querySelector("img") as HTMLImageElement;

// HTMLElement
const myImg = document.getElementById("img") as HTMLImageElement;

// bracket notation
const nextImg = <HTMLImageElement>document.getElementById("#img");

// Just Element due to lack of specification
const anotherImg = document.querySelector("#imgId");

img.src;
img2.src;
myImg.src;

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

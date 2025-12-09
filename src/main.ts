// generics
const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

// console.log(isObj(true));
// console.log(isObj("john"));
// console.log(isObj([1, 2, 3]));
// console.log(isObj({ name: "John" }));
// console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (
    (Array.isArray(arg) && !arg.length) ||
    (isObj(arg) && !Object.keys(arg as keyof T).length)
  ) {
    return { arg, is: false };
  }

  return { arg, is: !!arg };
};

// console.log(isTrue(false));
// console.log(isTrue(0));
// console.log(isTrue(true));
// console.log(isTrue(1));
// console.log(isTrue("dave"));
// console.log(isTrue(""));
// console.log(isTrue(null));
// console.log(isTrue(undefined));
// console.log(isTrue({}));
// console.log(isTrue({ name: "Dave" }));
// console.log(isTrue([]));
// console.log(isTrue([1, 2, 3]));
// console.log(isTrue(NaN));
// console.log(isTrue(-0));

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolVlue = <T>(arg: T): BoolCheck<T> => {
  if (
    (Array.isArray(arg) && !arg.length) ||
    (isObj(arg) && !Object.keys(arg as keyof T).length)
  ) {
    return { value: arg, is: false };
  }

  return { value: arg, is: !!arg };
};

// console.log(checkBoolVlue(false));
// console.log(checkBoolVlue(0));
// console.log(checkBoolVlue(true));
// console.log(checkBoolVlue(1));
// console.log(checkBoolVlue("dave"));
// console.log(checkBoolVlue(""));
// console.log(checkBoolVlue(null));
// console.log(checkBoolVlue(undefined));
// console.log(checkBoolVlue({}));
// console.log(checkBoolVlue({ name: "Dave" }));
// console.log(checkBoolVlue([]));
// console.log(checkBoolVlue([1, 2, 3]));
// console.log(checkBoolVlue(NaN));
// console.log(checkBoolVlue(-0));

interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  return user;
};

console.log(processUser({ id: 1, name: "Tracey" }));

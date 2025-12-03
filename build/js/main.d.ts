type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];
type Guitarist = {
    name?: string;
    active: boolean;
    albums: stringOrNumberArray;
};
type UserId = stringOrNumber;
declare let myName: "Tracey Kadenyi";
declare let userName: "Trace" | "Bruce" | "Bruno" | "Colleta";
declare const add: (a: number, b: number) => number;
declare const logMsg: (message: any) => void;
//# sourceMappingURL=main.d.ts.map
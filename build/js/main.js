"use strict";
// let stringArr: (string | number)[] = ["one", "two", "three", 4];
let stringArr;
stringArr = ["one", "two", "three", 4];
stringArr.push(5);
stringArr.unshift("first");
let Romance = {
    genre: "Romance",
    name: "Queen of Tears",
    year: 2024,
    good: true,
    actors: ["Kim Soo Hyun", "Kim Ji Won"],
};
let Psych = {
    genre: "Psychological Drama",
    name: "It's okay not to be okay",
    //   year: 2020,
    good: true,
    actors: ["Kim Soo Hyun", "Seo Ye Ji"],
};
// Romance = Psych
// console.log(Romance);
// console.log(Psych);
const greetActor = (kdrama) => {
    if (kdrama.name) {
        return `Hello ${kdrama.name}`;
    }
    return 'Hello';
};
console.log(greetActor(Psych));
//# sourceMappingURL=main.js.map
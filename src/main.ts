// let stringArr: (string | number)[] = ["one", "two", "three", 4];

let stringArr: (string | number)[];

stringArr = ["one", "two", "three", 4];

stringArr.push(5);
stringArr.unshift("first");

// console.log(stringArr)

type KDramas = {
  genre: string | boolean;
  name?: string;
  year?: number;
  good: boolean;
  actors: string[];
};

let Romance: KDramas = {
  genre: "Romance",
  name: "Queen of Tears",
  year: 2024,
  good: true,
  actors: ["Kim Soo Hyun", "Kim Ji Won"],
};

let Psych: KDramas = {
  genre: "Psychological Drama",
  name: "It's okay not to be okay",
//   year: 2020,
  good: true,
  actors: ["Kim Soo Hyun", "Seo Ye Ji"],
};

// Romance = Psych
// console.log(Romance);
// console.log(Psych);


const greetActor = (kdrama: KDramas) => {
   if(kdrama.name) {
    return `Hello ${kdrama.name}`
   }

   return 'Hello'
}

console.log(greetActor(Psych))
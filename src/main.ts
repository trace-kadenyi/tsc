// 1st Option
// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: string;

//   constructor(name: string, music: string, age: number, lang: string) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }
// }

// 2nd Option

class Coder {
  //   secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}.`;
  }

  //   public getLang() {
  //     return `I write ${this.lang}`;
  //   }
}

const Trace = new Coder("Tracey", "Gospel", 33);
// console.log(Trace.getAge());

// extend Coder
class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Kadenyi = new WebDev("Lenovo", "Kadenyi", "Soul", 23);
// console.log(Kadenyi.getLang());

/////////////////////////////    DIVIDER  ///////////////////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}.`;
  }
}

const Page = new Guitarist("Jimmy", "guitar");
// console.log(Page.play("strums"));

/////////////////////////////    DIVIDER  ///////////////////////////////////////

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const Bruce = new Peeps("Bruce");
const Bruno = new Peeps("Bruno");
const Tracey = new Peeps("Tracey");
const Colleta = new Peeps("Colleta");

// console.log(`Bruce's id: ${Bruce.id}`);
// console.log(`Bruno's id: ${Bruno.id}`);
// console.log(`Tracey's id: ${Tracey.id}`);
// console.log(`Total count: ${Peeps.count}`);

/////////////////////////////    DIVIDER  ///////////////////////////////////////

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  // getter
  public get data(): string[] {
    return this.dataState;
  }

  // setter
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings.");
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = ["A Great Big World", ...MyBands.data, "ZZ Top"];
console.log(MyBands.data);

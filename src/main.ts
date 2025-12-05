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
console.log(Page.play("strums"));

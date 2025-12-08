// index signatures

// interface TransactionObj {
//   readonly [index: string]: number;
// }

interface TransactionObj {
  readonly [index: string]: number; // allows us to add other properties such as Dave below
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Dave: 78, // added
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Books"]);

let prop: string = "Pizza";
// console.log(`prop: ${todaysTransactions[prop]}`);

const todaysNet = (transactions: TransactionObj): number | string => {
  let total = 0;
  for (const transaction in transactions) {
    const value = transactions[transaction];
    if (value !== undefined) {
      total += value;
    }
  }
  return "total: " + total;
};

// console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40 -> unacceptable/unassignable due to readonly

// console.log(todaysTransactions["Dave"]);

//////////////////////////////////////////////////////////////////////

interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

// KEYOF
// 1st method
for (const key in student) {
  // console.log(`${key}: ${student[key as keyof Student]}`);
}

// 2nd method
Object.keys(student).map((key) => {
  // console.log(student[key as keyof typeof student]);
});

// 3rd method
const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

// logStudentKey(student, "GPA");

//////////////////////////////////////////////////////////////////
// interface Incomes {
//   [key:string]: number
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

// loop for revenue
for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}

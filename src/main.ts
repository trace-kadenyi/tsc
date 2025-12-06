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
console.log(`prop: ${todaysTransactions[prop]}`);

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

console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40 -> unacceptable/unassignable due to readonly

console.log(todaysTransactions["Dave"]);

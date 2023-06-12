/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const uniqueCategories = [];
  const uniqueTransactions = [];

  for (const transaction of transactions) {
    const category = transaction.category;

    if (!uniqueCategories.includes(category)) {
      uniqueCategories.push(category);
      uniqueTransactions.push(transaction);
    }
  }

  // console.log("Unique Categories:", uniqueCategories);
  // console.log("Unique Transactions:", uniqueTransactions);

  return uniqueTransactions;
}

calculateTotalSpentByCategory(transactions);

module.exports = calculateTotalSpentByCategory;

const date = new Date();
const timestamp = date.getTime();

console.log(timestamp);

const transactions = [
  {
    itemName: "Mango",
    category: "Fruits",
    price: 50,
    timestamp: timestamp,
  },
  {
    itemName: "Mango",
    category: "Fruits",
    price: 60,
    timestamp: timestamp,
  },
  {
    itemName: "Lenovo ideapad",
    category: "Electronic",
    price: 50000,
    timestamp: timestamp,
  },
  {
    itemName: "Mac book",
    category: "Electronic",
    price: 150000,
    timestamp: timestamp,
  },
  {
    itemName: "cricket bat",
    category: "Sports",
    price: 5000,
    timestamp: timestamp,
  },
];

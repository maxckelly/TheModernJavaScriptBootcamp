let myAccount = {
    name: 'Maxs Account',
    expenses: 0,
    income: 0,
};

// let otherAccount = myAccount; // This hooks up to myAccount
// otherAccount.income = 1000; // Then you can change myAccount by referencing otherAccount

// Expenses
let addExpense = function (account, amount) {
   account.expenses = account.expenses + amount
};

// Income
let addIncome = function (account, income) {
    account.income = account.income + income
};

// Reset Account
let reset = function (account) {
    account.expenses = 0,
    account.income = 0
};

// Account Summary
let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `${account.name} has $${balance}. $${account.income} in income and $${account.expenses} in expenses`
};

addExpense(myAccount, 180.94);
addIncome(myAccount, 3600);

console.log(myAccount);
console.log(getAccountSummary(myAccount));
reset(myAccount);
console.log(myAccount);
console.log(getAccountSummary(myAccount))
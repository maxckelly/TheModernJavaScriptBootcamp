const account = {
    name: 'Max Kelly',
    expenses: [],
    income: [],
    balance: [],

    addExpense: function(description, amount) {
        this.expenses.unshift({
            description: description,
            amount: amount
        })
    },

    addIncome: function(description, amount) {
        this.income.unshift({
            description: description,
            amount: amount
        })
    },

    getAccountSummary: function() {
        let totalExpenses = 0 
        let totalIncome = 0
        let balance = 0

        this.expenses.forEach(function(item){
            totalExpenses = totalExpenses + item.amount
        })

        this.income.forEach(function(item){
            totalIncome = totalIncome + item.amount
        })

        balance = totalIncome - totalExpenses
        return `${account.name} has a total of $${totalExpenses} and earns a total of $${totalIncome} making his balance: $${balance} `
    },
    
};

// Expense -> description, amount
// addExpense -> This will take two arguments 1. Description 2. Amount 
// getAccountSummary - This function will total up all the expenses -> "Max Kelly has ${total} in expenses"


account.addExpense('Rent', 900);
account.addExpense('Food', 400);
account.addIncome('Job', 3000);
account.addIncome('Sale', 200);
console.log(account.getAccountSummary())

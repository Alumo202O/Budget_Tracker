// ==========================================
// SpendWise - JavaScript Foundation
// ==========================================

// 1. Store application data

let budget = 0;
let expense1 = 0;
let expense2 = 0;
let expense3 = 0;


// 2. Collect user input

budget = Number(prompt("Enter your monthly budget:"));

expense1 = Number(prompt("Enter your first expense:"));

expense2 = Number(prompt("Enter your second expense:"));

expense3 = Number(prompt("Enter your third expense:"));


// 3. Calculate total expenses

function calculateTotalExpenses(expense1, expense2, expense3) {
    return expense1 + expense2 + expense3;
}


// 4. Calculate remaining balance

function calculateBalance(budget, expenses) {
    return budget - expenses;
}


// Calculate results

let totalExpenses = calculateTotalExpenses(
    expense1,
    expense2,
    expense3
);

let remainingBalance = calculateBalance(
    budget,
    totalExpenses
);


// 5. Display results in the console

console.log("===== SpendWise Budget Summary =====");

console.log("Monthly Budget: KSh " + budget);

console.log("Total Expenses: KSh " + totalExpenses);

console.log("Remaining Balance: KSh " + remainingBalance);

console.log("====================================");
if (remainingBalance < 0) {
    budgetMessage.textContent = "Budget Exceeded!";
} else if (remainingBalance <= budget * 0.20) {
    budgetMessage.textContent = "Warning: Low balance.";
} else {
    budgetMessage.textContent = "Your budget is on track.";
}
//Arrays
let expenses = [];

expenses.push({
    name: name,
    amount: amount,
    category: category
});
//loops
for (let expense of expenses) {
    total += expense.amount;
}
//DOM update
totalExpensesDisplay.textContent =
    "KSh " + totalExpenses;
    const totalExpensesDisplay =
    document.getElementById("total-expenses");
    //Events
    expenseForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("expense-name").value;
        const amount = parseFloat(document.getElementById("expense-amount").value);
        const category = document.getElementById("expense-category").value;

        expenses.push({
            name: name,
            amount: amount,
            category: category
        });

        // Clear the form
        expenseForm.reset();
    });
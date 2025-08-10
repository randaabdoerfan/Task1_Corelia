const amountInput = document.getElementById("amountInput");
const typeInput = document.getElementById("typeInput");
const addBtn = document.getElementById("addBtn");
const transactionList = document.getElementById("transactionList");
const TotalDisplay = document.getElementById("total");
const incomeDisplay = document.getElementById("totalIncome");
const expenseDisplay = document.getElementById("totalExpense");

let transactions = [];

window.addEventListener("DOMContentLoaded", () => {
  const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
  if (savedTransactions) {
    transactions = savedTransactions;
  }
  renderTransactions();
  toggleAddButton();
});

// Enable or disable add button based on input validation
function toggleAddButton() {
  const amount = parseFloat(amountInput.value);
  if (!isNaN(amount) && amount > 0) {
    addBtn.disabled = false;
  } else {
    addBtn.disabled = true;
  }
}

amountInput.addEventListener("input", toggleAddButton);

addBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value.trim());
  const type = typeInput.value;

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid positive amount");
    return;
  }

  const transaction = {
    id: Date.now(),
    amount,
    type,
  };

  transactions.push(transaction);
  saveAndRender();
  amountInput.value = "";
  typeInput.value = "income"; // Reset type to default
  toggleAddButton();
});

function renderTransactions() {
  transactionList.innerHTML = "";

  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((tx) => {
    const li = document.createElement("li");
    li.classList.add(tx.type);
    li.textContent = `${tx.type === "income" ? "+" : "-"} $${tx.amount.toFixed(2)}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
      if (confirm("Are you sure you want to delete this transaction?")) {
        transactions = transactions.filter((t) => t.id !== tx.id);
        saveAndRender();
      }
    };

    li.appendChild(deleteBtn);
    transactionList.appendChild(li);

    if (tx.type === "income") totalIncome += tx.amount;
    else totalExpense += tx.amount;
  });

  const total = totalIncome - totalExpense;

  TotalDisplay.textContent = `$${total.toFixed(2)}`;
  incomeDisplay.textContent = `$${totalIncome.toFixed(2)}`;
  expenseDisplay.textContent = `$${totalExpense.toFixed(2)}`;
}

function saveAndRender() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
  renderTransactions();
}

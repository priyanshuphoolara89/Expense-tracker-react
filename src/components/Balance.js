function Balance({ transactions }) {
  let income = 0;
  let expense = 0;

  transactions.forEach(function (transaction) {
    if (transaction.type === "income") {
      income = income + transaction.amount;
    } else {
      expense = expense + transaction.amount;
    }
  });

  const balance = income - expense;

  return (
    <div className="balance-section">

      <div className="balance">
        <p>Current Balance</p>
        <h2>₹{balance}</h2>
      </div>

      <div className="summary">

        <div>
          <p>Income</p>
          <h3 className="income">+₹{income}</h3>
        </div>

        <div>
          <p>Expense</p>
          <h3 className="expense">-₹{expense}</h3>
        </div>

      </div>

    </div>
  );
}

export default Balance;
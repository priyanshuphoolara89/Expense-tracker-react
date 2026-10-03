function TransactionItem({ transaction, deleteTransaction }) {

  return (
    <div className="transaction-item">

      <div>
        <h3>{transaction.name}</h3>
        <p>
          {transaction.type === "income"
            ? "Income"
            : "Expense"}
        </p>
      </div>

      <div className="transaction-right">

        <strong
          className={
            transaction.type === "income"
              ? "income"
              : "expense"
          }
        >
          {transaction.type === "income" ? "+" : "-"}
          ₹{transaction.amount}
        </strong>

        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TransactionItem;
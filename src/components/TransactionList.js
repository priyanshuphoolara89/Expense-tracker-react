import TransactionItem from "./TransactionItem";

function TransactionList({
  transactions,
  deleteTransaction
}) {

  return (
    <div className="transaction-list">

      <h2>Transactions</h2>

      {transactions.length === 0 ? (
        <p className="empty">
          No transactions yet
        </p>
      ) : (
        transactions.map(function (transaction) {

          return (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              deleteTransaction={deleteTransaction}
            />
          );

        })
      )}

    </div>
  );
}

export default TransactionList;
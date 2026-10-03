import { useState } from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

import "./App.css";

function App() {

  const [transactions, setTransactions] = useState([]);

  function addTransaction(transaction) {

    setTransactions([
      ...transactions,
      transaction
    ]);

  }

  function deleteTransaction(id) {

    setTransactions(
      transactions.filter(function (transaction) {
        return transaction.id !== id;
      })
    );

  }

  return (
    <div className="app">

      <Header />

      <div className="container">

        <Balance
          transactions={transactions}
        />

        <TransactionForm
          addTransaction={addTransaction}
        />

        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />

      </div>

    </div>
  );
}

export default App;
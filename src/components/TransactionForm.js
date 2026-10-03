import { useState } from "react";

function TransactionForm({ addTransaction }) {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || amount === "") {
      return;
    }

    const transaction = {
      id: Date.now(),
      name: name,
      amount: Number(amount),
      type: type
    };

    addTransaction(transaction);

    setName("");
    setAmount("");
    setType("expense");
  }

  return (
    <div className="form-box">

      <h2>Add Transaction</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Transaction name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button type="submit">
          Add Transaction
        </button>

      </form>

    </div>
  );
}

export default TransactionForm;
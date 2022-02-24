import React, {useState, useContext} from 'react'
import {GlobalState} from '../context/GlobalState';

export const TransactionAdded = () => {
  const {transactionAdded} = useContext(GlobalState);
  const [amount, setAmount] = useState(0);
  const [text, setText] = useState('');

  const submitTransaction = e => {
    e.preventDefault();
    const nuevoTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    transactionAdded(nuevoTransaction);
  }

  return (
    <>
      <h3>Add Transaction Below</h3>
      <form onSubmit={submitTransaction}>
        <div className="form-control">
          <label htmlFor="text">
            Expense<br />
            (Ex. Groceries, Wage, or Rent)
          </label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Expense Type..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (Ex. -80 or 9000)
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Expense Amount..." />
        </div>
        <button className="btn">Sum</button>
      </form>
    </>
  )
}
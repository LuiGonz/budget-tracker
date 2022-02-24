import React, {useContext} from 'react';
import {Transaction} from './Transaction';
import {GlobalState} from '../context/GlobalState';

export const TransactionHistory = () => {
  const { transactions } = useContext(GlobalState);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
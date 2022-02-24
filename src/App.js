import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {ExpensesIncome} from './components/ExpensesIncome';
import {TransactionHistory} from './components/TransactionHistory';
import {TransactionAdded} from './components/TransactionAdded';
import {ProvideGlobal} from './context/GlobalState';

import './App.css';

function App() {
  return (
    <ProvideGlobal>
      <div className="container">
        <Header />
        <Balance />
        <ExpensesIncome />
        
        <TransactionHistory />
        <TransactionAdded />
      </div>
    </ProvideGlobal>
  );
}
export default App;



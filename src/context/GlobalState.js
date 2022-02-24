import React, {createContext, useReducer} from 'react';
import TrackReducer from './TrackReducer';

// Initial state
const initState = {
  transactions: [
    {id: 1, text: "Plants", amount: -70},
    {id: 2, text: "Bi-Weekly Salary", amount: 3000},
    {id: 3, text: "Laptop", amount: -200},
    {id: 4, text: "PS5 Console", amount: -499}
  ]
}

export const GlobalState = createContext(initState);

export const ProvideGlobal = ({children}) => {
  const [state, dispatch] = useReducer(TrackReducer, initState);

  function transactionAdded(transaction) {
    dispatch({
      payload: transaction,
      type: 'Transaction Added'
    });
  }

  function transactionDeleted(id) {
    dispatch({
      payload: id,
      type: 'Transaction Deleted'
    });
  }
  
  return (
    <GlobalState.Provider 
      value={{transactions: state.transactions,transactionAdded,transactionDeleted}}>
        {children}
    </GlobalState.Provider>
  );
}
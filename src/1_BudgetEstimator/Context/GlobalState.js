import React, { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  incomeTransactions: JSON.parse(localStorage.getItem('IncomeTransactions')) || [],
  expenseTransactions: JSON.parse(localStorage.getItem('ExpenseTransactions')) || [],
  findEditItems: null,
  editButton: false
};
const GlobalContext = createContext();


const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('IncomeTransactions', JSON.stringify(state.incomeTransactions));
    localStorage.setItem('ExpenseTransactions', JSON.stringify(state.expenseTransactions));
  });

  const AddIncome = newValue => {
    dispatch({ type: 'Add_Income', payload: newValue });
  }
  const AddExpense = newValue => {
    dispatch({ type: 'Add_Expense', payload: newValue });
  }
  const deleteTransc = id => {
    dispatch({ type: 'Delete_Trans', payload: id });
  }
  const findTransc = id => { 
    dispatch({ type: 'Find_Trans', payload: id });
  }
  const updateIncome = (id, incomeText, incomeAmount) => {
    dispatch({ type: 'Update_Trans', payload: { id, incomeText, incomeAmount } });
  }


  return <GlobalContext.Provider value={{
    incomeTransactions: state.incomeTransactions,
    expenseTransactions: state.expenseTransactions,
    AddIncome,
    AddExpense,
    deleteTransc,
    findTransc,
    findEditItems: state.findEditItems,
    editButton: state.editButton,
    updateIncome
  }}>
    {children}
  </GlobalContext.Provider>
};

export { GlobalContext, GlobalContextProvider };

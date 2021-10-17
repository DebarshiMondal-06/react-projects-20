import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

const ExpenseTrans = ({ expense }) => {
  const { deleteTransc } = useContext(GlobalContext);

  return (
    <li className='transaction' key={expense.id}>
      <span className="transactions-text">{expense.expenseText}</span>
      <span className="transactions-amount">${expense.expenseAmount}</span>
      <button onClick={() => deleteTransc(expense.id)} className="delete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  )
}

export default ExpenseTrans

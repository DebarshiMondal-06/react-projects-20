import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

const IncomeTrans = ({ income }) => {
  const { deleteTransc, findTransc } = useContext(GlobalContext);

  return (
    <li className='transaction' key={income.id}>
      <span className="transactions-text">{income.incomeText}</span>
      <span className="transactions-amount">${income.incomeAmount}</span>
      <button onClick={() => deleteTransc(income.id)} className="delete-btn">
        <i className="fas fa-trash"></i>
      </button>
      <button onClick={() => findTransc(income.id)} className="btn-warning">
        <i className="fas fa-edit"></i>
      </button>
    </li>
  )
}

export default IncomeTrans;

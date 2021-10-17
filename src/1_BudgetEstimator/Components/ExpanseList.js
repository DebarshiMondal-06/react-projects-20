import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';
import ExpenseTrans from './ExpenseTrans';

const ExpanseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);

  return <div className='transactions transactions-expense'>
    <h2> Transction Histroy</h2>
    <ul className='transaction-list'>
      {
        expenseTransactions.map((items) => {
          return <ExpenseTrans
            key={items.id}
            expense={items} />
        })
      }
    </ul>
  </div>
}

export default ExpanseList;

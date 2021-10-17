import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import IncomeTrans from './IncomeTrans';



const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  return <div className='transactions transactions-income'>
    <h2> Transction Histroy</h2>
    <ul className='transaction-list'>
      {
        incomeTransactions.map((items) => {
          return <IncomeTrans
            key={items.id}
            income={items} />
        })
      }
    </ul>
  </div>
}

export default IncomeList;

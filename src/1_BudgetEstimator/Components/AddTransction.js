import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState';

const AddTransction = () => {
  const { AddIncome, AddExpense, findEditItems, editButton, updateIncome } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: '',
    incomeAmount: 0
  });
  const [expense, setExpense] = useState({
    expenseText: '',
    expenseAmount: 0
  });

  useEffect(() => {
    if (findEditItems !== null) {
      setIncome({ incomeText: findEditItems.incomeText, incomeAmount: findEditItems.incomeAmount });
    }
  }, [findEditItems]);


  const handleEvent = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (findEditItems === null) {
      const newIncomes = {
        id: new Date().getTime().toString(),
        incomeText: income.incomeText,
        incomeAmount: income.incomeAmount * 1
      }
      AddIncome(newIncomes);
    }
    else {
      updateIncome(findEditItems.id, income.incomeText, income.incomeAmount);
      setIncome({incomeText: '',incomeAmount:''});
    }
  }



  const handleExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  }
  const submitExpense = (e) => {
    e.preventDefault();
    const newExpenses = {
      id: new Date().getTime().toString(),
      expenseText: expense.expenseText,
      expenseAmount: expense.expenseAmount * 1
    }
    AddExpense(newExpenses);
  }




  return <div className='form-wrapper'>
    <form onSubmit={handleSubmit}>
      <div className="input-group income">
        <input value={income.incomeText} onChange={handleEvent} name='incomeText' type="text" placeholder='Add Income...' autoComplete='off' />
        <input value={income.incomeAmount} onChange={handleEvent} name='incomeAmount' type="number" placeholder='Amount' autoComplete='off' />
        <input type='submit' value={`${editButton ? 'Edit' : 'Submit'}`} />
      </div>
    </form>

    <form onSubmit={submitExpense}>
      <div className="input-group expense">
        <input onChange={handleExpense} name='expenseText' type="text" placeholder='Add Expense...' autoComplete='off' />
        <input onChange={handleExpense} name='expenseAmount' type="number" placeholder='Amount' autoComplete='off' />
        <input type='submit' value='Submit' />
      </div>
    </form>
  </div>
}

export default AddTransction;

import React from 'react'
import './App.css';
import AddTransction from './Components/AddTransction';
import Balance from './Components/Balance';
import ExpanseList from './Components/ExpanseList';
import Header from './Components/header';
import IncomeList from './Components/IncomeList';
import { GlobalContextProvider } from './Context/GlobalState';


const App = () => {
  return <GlobalContextProvider>
    <section className='container'>
      <div className="app-wrapper">
        <Header />
        <Balance />
        <AddTransction />
        <IncomeList />
        <ExpanseList />
      </div>
    </section>
  </GlobalContextProvider>
}

export default App;

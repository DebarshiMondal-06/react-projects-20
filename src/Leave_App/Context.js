import React, { createContext } from 'react';
const GlobalContext = createContext();




const Context = ({ children }) => {

  const removeTokens = () => {
    localStorage.removeItem('tokens');
    localStorage.removeItem('users');
    window.location.reload();
  };


  return <GlobalContext.Provider value={{
    removeTokens
  }}>
    {children}
  </GlobalContext.Provider>
};


export { GlobalContext, Context };
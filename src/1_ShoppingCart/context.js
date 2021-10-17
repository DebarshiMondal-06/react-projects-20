import Axios from 'axios';
import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
// import cartItems from './data';
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'LOADING' });
    Axios.get(url)
      .then((res) => dispatch({ type: 'FETCH_DATA', payload: res.data }))
      .catch(err => console.log(err));
  },[]);
  
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  }
  const decrease = id => {
    dispatch({ type: 'DECREASE', payload: id });
  }
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  }
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  }
  
  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
  }, [state.cart]);

  return <AppContext.Provider value={{
    ...state,
    clearCart,
    removeItem,
    increase,
    decrease
  }}>
    {children}
  </AppContext.Provider>
}


export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppProvider }; 

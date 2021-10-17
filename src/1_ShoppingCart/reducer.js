const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return {
      ...state,
      loading: true
    }
  }
  if (action.type === 'FETCH_DATA') {
    return {
      ...state,
      loading: false,
      cart: action.payload
    }
  }
  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: []
    }
  }
  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload)
    }
  }
  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((cartItems) => {
      return (cartItems.id === action.payload) ? { ...cartItems, amount: cartItems.amount + 1 } : cartItems;
    });
    return {
      ...state,
      cart: tempCart
    }
  };
  if (action.type === 'DECREASE') {
    let tempCart = state.cart.map((cartItems) => {
      return (cartItems.id === action.payload) ? { ...cartItems, amount: cartItems.amount - 1 } : cartItems;
    });
    return {
      ...state,
      cart: tempCart.filter((itmes) => itmes.amount !== 0)
    }
  };
  if (action.type === 'GET_TOTAL') {
    const { total, amount } = state.cart.reduce((cartTotal, cartItems) => {
      const { price, amount } = cartItems;
      cartTotal.amount += amount;
      cartTotal.total = (cartTotal.amount * price).toFixed(2);
      return cartTotal;
    }, {
      total: 0,
      amount: 0
    });
    return {
      ...state, total, amount
    }
  };


  // Default return.......
  return state;
};

export default reducer;

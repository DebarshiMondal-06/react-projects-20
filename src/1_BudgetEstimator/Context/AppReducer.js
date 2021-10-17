export default (state, action) => {
  if (action.type === 'Add_Income') {
    return {
      ...state,
      incomeTransactions: [...state.incomeTransactions, action.payload]
    }
  };
  if (action.type === 'Add_Expense') {
    return {
      ...state,
      expenseTransactions: [...state.expenseTransactions, action.payload]
    }
  };
  if (action.type === 'Delete_Trans') {
    return {
      ...state,
      incomeTransactions: state.incomeTransactions.filter((items) => items.id !== action.payload),
      expenseTransactions: state.expenseTransactions.filter((expenses) => expenses.id !== action.payload)
    }
  };
  if (action.type === 'Find_Trans') {
    let updateItems = state.incomeTransactions.find((itmes) => {
      return itmes.id === action.payload;
    });
    return {
      ...state,
      findEditItems: updateItems,
      editButton: true
    };
  };
  if (action.type === 'Update_Trans') {
    return {
      ...state,
      incomeTransactions: state.incomeTransactions.map((el) => {
        return (el.id === action.payload.id) ? {
          ...el,
          incomeText: action.payload.incomeText,
          incomeAmount: action.payload.incomeAmount * 1
        } : el
      }),
      editButton: false,
      findEditItems: null
    };
  };
}













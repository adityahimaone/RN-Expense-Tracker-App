import { configureStore } from '@reduxjs/toolkit';

import ExpensesReducer from './expensesSlice';

const store = configureStore({
  reducer: {
    expenses: ExpensesReducer,
  },
});

export default store;
 
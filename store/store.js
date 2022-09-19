import { configureStore } from '@reduxjs/toolkit';

import ExpensesReducer from './expensesSlice';

const store = configureStore({
  reducer: {
    expenses: ExpensesReducer,
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
});

export default store;

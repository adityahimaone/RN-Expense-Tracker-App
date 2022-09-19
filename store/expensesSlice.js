import { createSlice } from '@reduxjs/toolkit';
import { useId } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pice of cake',
    amount: 3213,
    date: new Date(2022, 8, 13),
  },
  {
    id: 'e2',
    description: 'A pice of cake',
    amount: 3213,
    date: new Date(2022, 8, 16),
  },
  {
    id: 'e3',
    description: 'A pair of shoes',
    amount: 10000,
    date: new Date(2022, 8, 11),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 10000,
    date: new Date(2022, 8, 17),
  },
  {
    id: 'e5',
    description: 'A Macbook',
    amount: 14500000,
    date: new Date(2022, 8, 10),
  },
];

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    loading: false,
    data: [...DUMMY_EXPENSES],
  },
  reducers: {
    addExpense: (state, action) => {
      const { description, amount, date, category } = action.payload;
      const id = useId();
      state.data.push({
        id,
        description,
        amount,
        date,
        category,
      });
    },
    deleteExpense: (state, action) => {
      const { id } = action.payload;
      state.data = state.data.filter((expense) => expense.id !== id);
    },
    updateExpense: (state, action) => {
      const { id, description, amount, date, category } = action.payload;
      const expense = state.data.find((expense) => expense.id === id);
      if (expense) {
        expense.description = description;
        expense.amount = amount;
        expense.date = date;
        expense.category = category;
      }
    },
  },
});

export const { addExpense, deleteExpense, updateExpense } = expensesSlice.actions;
export default expensesSlice.reducer;

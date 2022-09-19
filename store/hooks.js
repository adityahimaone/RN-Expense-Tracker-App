import { useDispatch, useSelector } from 'react-redux';
import { addExpense, deleteExpense, updateExpense } from './expensesSlice';

const ReduxHooks = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.data);

  const GetListExpenses = () => {
    return expenses;
  };

  const AddExpense = (description, amount, date, category) => {
    dispatch(addExpense({ description, amount, date, category }));
  };

  const DeleteExpense = (id) => {
    dispatch(deleteExpense({ id }));
  };

  const UpdateExpense = (id, description, amount, date, category) => {
    dispatch(updateExpense({ id, description, amount, date, category }));
  };

  return { GetListExpenses, AddExpense, DeleteExpense, UpdateExpense };
};

export default ReduxHooks;

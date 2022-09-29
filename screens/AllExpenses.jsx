import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import ExpensesOutput from 'components/ExpensesOutput';
import ReduxHooks from 'store/hooks';

export default function AllExpenses() {
  const { GetListExpenses } = ReduxHooks();
  const expensesData = GetListExpenses();

  return (
    <ExpensesOutput
      expenses={expensesData}
      expensesPeriod="Total"
      fallbackText="No register expenses found."
    />
  );
}

const styles = StyleSheet.create({});

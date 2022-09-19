import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import ExpensesOutput from 'components/ExpensesOutput';
import ReduxHooks from 'store/hooks';

export default function RecentExpenses() {
  const { GetListExpenses } = ReduxHooks();
  const expensesData = GetListExpenses();

  const recentExpenses = expensesData.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    return expense.date > date7DaysAgo;
  });

  return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />;
}

const styles = StyleSheet.create({});

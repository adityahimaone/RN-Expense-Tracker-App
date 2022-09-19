import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from 'constants/style';

ExpensesOutput.propTypes = {
  periodName: PropTypes.string,
};

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pice of cake',
    amount: 3213,
    date: new Date(2021, 3, 1),
  },
  {
    id: 'e2',
    description: 'A pice of cake',
    amount: 3213,
    date: new Date(2021, 4, 7),
  },
  {
    id: 'e3',
    description: 'A pair of shoes',
    amount: 10000,
    date: new Date(2021, 7, 23),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 10000,
    date: new Date(2021, 5, 1),
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

ExpensesOutput.defaultProps = {
  expensesPeriod: 'Last 7 Days',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary400,
  },
});

import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from 'constants/style';

ExpensesOutput.propTypes = {
  periodName: PropTypes.string,
};

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
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
    backgroundColor: GlobalStyles.colors.white200,
  },
});

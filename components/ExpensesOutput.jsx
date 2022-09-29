import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from 'constants/style';

ExpensesOutput.propTypes = {
  expenses: PropTypes.array,
  periodName: PropTypes.string,
  fallbackText: PropTypes.string,
};

export default function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
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
  infoText: {
    color: GlobalStyles.colors.primary400,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});

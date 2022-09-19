import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyles } from 'constants/style';

ExpensesSummary.propTypes = {
  periodName: PropTypes.string,
};

export default function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, currentExp) => {
    return sum + currentExp.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.periodText}>{periodName}</Text>
      <Text style={styles.sumText}>{expensesSum}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  periodText: {
    fontSize: 12,
    color: GlobalStyles.colors.primary200,
  },
  sumText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary400,
  },
});

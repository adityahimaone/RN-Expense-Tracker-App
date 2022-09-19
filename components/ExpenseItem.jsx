import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyles } from 'constants/style';
import Shadow from 'constants/shadow';

ExpenseItem.propTypes = {
  description: PropTypes.string,
  amount: PropTypes.number,
  date: PropTypes.instanceOf(Date),
};

export default function ExpenseItem({ description, amount, date }) {
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.descriptionText]}>{description}</Text>
          <Text style={styles.textBase}>{date.toString()}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    ...Shadow,
  },
  textBase: {
    color: 'white',
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  amountText: {
    color: GlobalStyles.colors.primary400,
    fontWeight: 'bold',
  },
});

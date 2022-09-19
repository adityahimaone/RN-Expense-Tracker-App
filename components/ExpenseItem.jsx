import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyles } from 'constants/style';
import Shadow from 'constants/shadow';
import formatDate from 'utils/helper/format-date.js';
import formatPrice from 'utils/helper/format-price.js';

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
          <Text style={styles.textBase}>{formatDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>{formatPrice(amount)}</Text>
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
    minWidth: 90,
  },
  amountText: {
    color: GlobalStyles.colors.primary400,
    fontWeight: 'bold',
  },
});

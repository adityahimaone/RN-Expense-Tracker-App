import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { GlobalStyles } from 'constants/style';
import Shadow from 'constants/shadow';
import formatDate from 'utils/helper/format-date.js';
import formatPrice from 'utils/helper/format-price.js';

ExpenseItem.propTypes = {
  description: PropTypes.string,
  amount: PropTypes.number,
  date: PropTypes.instanceOf(Date),
};

export default function ExpenseItem({ id, description, amount, date }) {
  const navigation = useNavigation();

  const expensePressHandler = () => {
    navigation.navigate('ManageExpense', {
      expenseId: id,
    });
  };

  return (
    <Pressable onPress={expensePressHandler} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.expenseItem}>
        <View style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="ios-wallet" size={24} color={GlobalStyles.colors.primary400} />
          </View>
          <View>
            <Text style={[styles.textBase, styles.descriptionText]}>{description}</Text>
            <Text style={styles.textBase}>{formatDate(date)}</Text>
          </View>
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
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 12,
    padding: 8,
    backgroundColor: GlobalStyles.colors.white100,
    borderRadius: 4,
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  amountText: {
    color: GlobalStyles.colors.white200,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.5,
  },
});

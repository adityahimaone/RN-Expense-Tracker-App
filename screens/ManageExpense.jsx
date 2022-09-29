import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useLayoutEffect } from 'react';

import ButtonIcon from 'components/UI/ButtonIcon';
import { GlobalStyles } from 'constants/style';
import Button from 'components/UI/Button';
import ReduxHooks from 'store/hooks';
import ExpenseForm from 'components/ManageExpense/ExpenseForm';

export default function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  // console.log(route.params, editedExpenseId, 'params');
  const isEditing = !!editedExpenseId;
  const { AddExpense, DeleteExpense, UpdateExpense } = ReduxHooks();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [isEditing, navigation]);

  const deleteExpenseHandler = () => {
    DeleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelExpenseHandler = () => {
    // navigation goBack() is method for navigating back to previous screen
    navigation.goBack();
  };

  const confirmExpenseHandler = (expenseData) => {
    // const today = new Date().toISOString();
    const { amount, date, description, category } = expenseData;
    if (isEditing) {
      UpdateExpense(editedExpenseId, description, parseInt(amount), date, category);
    } else {
      AddExpense(description, parseInt(amount), date, category);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        isEditing={isEditing}
        onCancel={cancelExpenseHandler}
        onSubmit={confirmExpenseHandler}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <ButtonIcon
            iconName="md-trash"
            size={36}
            onPress={deleteExpenseHandler}
            color={GlobalStyles.colors.error500}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.white200,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});

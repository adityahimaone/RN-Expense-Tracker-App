import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';

import ButtonIcon from 'components/UI/ButtonIcon';
import { GlobalStyles } from 'constants/style';
import Button from 'components/UI/Button';
import ReduxHooks from 'store/hooks';

export default function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  // console.log(route.params, editedExpenseId, 'params');
  const isEditing = !!editedExpenseId;
  const { DeleteExpense, UpdateExpense } = ReduxHooks();

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

  const confirmExpenseHandler = () => {
    const today = new Date().toISOString();
    if (isEditing) {
      UpdateExpense(editedExpenseId, 'Update Test', 11000, today, 'Food');
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode="flat" onPress={cancelExpenseHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmExpenseHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>

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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});

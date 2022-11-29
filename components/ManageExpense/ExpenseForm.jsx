import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from './InputText';
import InputSelect from './InputSelect';
import InputDate from './InputDate';
import { GlobalStyles } from 'constants/style';
import Button from 'components/UI/Button';
import formatDate from 'utils/helper/format-date.js';

const options = [
  {
    value: 'md-food',
    label: 'Food',
  },
  {
    value: 'md-bill',
    label: 'Bill',
  },
  {
    value: 'md-clothes',
    label: 'Clothes',
  },
  {
    value: 'md-living',
    label: 'Living',
  },
];

ExpenseForm.propTypes = {
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  isEditing: PropTypes.bool,
  defaultValue: PropTypes.object,
};

export default function ExpenseForm({ onCancel, onSubmit, isEditing, defaultValues }) {
  const [date, setDate] = useState(new Date(Date.now()));
  const [show, setShow] = useState(false);

  const today = new Date().toISOString();
  const [inputValues, setInputValues] = useState({
    amount: {
      value: defaultValues ? defaultValues?.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues?.date : today,
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues?.description : '',
      isValid: true,
    },
    category: {
      value: defaultValues ? defaultValues?.category : '',
      isValid: true,
    },
  });

  const inputChangeHandler = (inputIdentifier, inputValue) => {
    setInputValues((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: { value: inputValue, isValid: true },
      };
    });
  };

  const inputSelectHandler = (inputIdentifier, inputValue) => {
    setInputValues((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: inputValue.value,
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount.value,
      date: inputValues.date.value,
      description: inputValues.description.value,
      category: inputValues.category.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) & (expenseData.amount > 0);
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    console.log(dateIsValid, 'dateIsValid');

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // Alert.alert('Invalid input!', 'Please check your input values');
      if (!dateIsValid) {
        return;
      }
      setInputValues((prevState) => {
        return {
          amount: { value: prevState.amount.value, isValid: amountIsValid },
          date: { value: prevState.date.value, isValid: dateIsValid },
          description: { value: prevState.description.value, isValid: descriptionIsValid },
          category: { value: prevState.category.value, isValid: true },
        };
      });
      return;
    }
    onSubmit(expenseData);
  };

  const formIsInvalid =
    !inputValues.amount.isValid || !inputValues.date.isValid || !inputValues.description.isValid;

  return (
    <View>
      <Text style={styles.title}>Your Expense</Text>
      <Input
        label="Amount"
        invalid={!inputValues.amount.isValid}
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: inputChangeHandler.bind(this, 'amount'),
          value: inputValues.amount.value,
        }}
      />
      <Input
        label="Date"
        invalid={!inputValues.date.isValid}
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: inputChangeHandler.bind(this, 'date'),
          value: inputValues.date.value,
        }}
      />
      {/* <InputDate label="Date" value={date} onChange={dateChangeHandler} show={show} /> */}
      <Input
        label="Description"
        invalid={!inputValues.description.isValid}
        textInputConfig={{
          onChangeText: inputChangeHandler.bind(this, 'description'),
          multiline: true,
          autoCapitalize: 'sentences', // 'none', 'sentences' (default), 'words', 'characters'
          //   autoCorrect: false, // default is true
          value: inputValues.description.value,
        }}
      />
      <InputSelect
        label="Category"
        options={options}
        onSelect={inputSelectHandler.bind(this, 'category')}
        value={inputValues.category.value}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>Invalid input values - Please check your input values</Text>
      )}
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
    </View>
  );
}

ExpenseForm.defaultProps = {
  defaultValue: {
    amount: '',
    date: '',
    description: '',
    category: '',
  },
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary300,
    textAlign: 'center',
  },
  errorText: {
    textAlign: 'center',
    margin: 8,
    color: GlobalStyles.colors.error500,
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
});

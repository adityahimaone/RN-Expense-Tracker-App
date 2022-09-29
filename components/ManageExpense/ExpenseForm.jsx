import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from './InputText';
import InputSelect from './InputSelect';
import InputDate from './InputDate';
import { GlobalStyles } from 'constants/style';
import Button from 'components/UI/Button';

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
};

export default function ExpenseForm({ onCancel, onSubmit, isEditing }) {
  const [date, setDate] = useState(new Date(Date.now()));
  const [show, setShow] = useState(false);

  const today = new Date().toISOString();
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: today,
    description: '',
    category: '',
  });

  const inputChangeHandler = (inputIdentifier, inputValue) => {
    setInputValues((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: inputValue,
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
      amount: inputValues.amount,
      date: inputValues.date,
      description: inputValues.description,
      category: inputValues.category,
    };

    onSubmit(expenseData);
  };

  console.log(inputValues);

  return (
    <View>
      <Text style={styles.title}>Your Expense</Text>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: inputChangeHandler.bind(this, 'amount'),
          value: inputValues.amount,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: inputChangeHandler.bind(this, 'date'),
          value: inputValues.date,
        }}
      />
      {/* <InputDate label="Date" value={date} onChange={dateChangeHandler} show={show} /> */}
      <Input
        label="Description"
        textInputConfig={{
          onChangeText: inputChangeHandler.bind(this, 'description'),
          multiline: true,
          autoCapitalize: 'sentences', // 'none', 'sentences' (default), 'words', 'characters'
          //   autoCorrect: false, // default is true
          value: inputValues.description,
        }}
      />
      <InputSelect
        label="Category"
        options={options}
        onSelect={inputSelectHandler.bind(this, 'category')}
      />
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

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary300,
    textAlign: 'center',
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

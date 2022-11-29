import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyles } from 'constants/style';

Input.propTypes = {
  label: PropTypes.string,
  textInputConfig: PropTypes.object,
  invalid: PropTypes.bool,
};

export default function Input({ label, textInputConfig, invalid }) {
  const inputStyle = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyle.push(styles.invalidInput);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary200,
    marginBottom: 4,
  },
  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary200,
    padding: 5,
    color: GlobalStyles.colors.primary400,
    fontSize: 16,
    backgroundColor: GlobalStyles.colors.white200,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
    borderColor: GlobalStyles.colors.error500,
  },
});

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Select } from '@mobile-reality/react-native-select-pro';
import PropTypes from 'prop-types';

import { GlobalStyles } from 'constants/style';

InputSelect.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
};

export default function InputSelect({ label, options, onSelect, value }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <Select
        selectControlStyle={styles.selectControl}
        optionsListStyle={styles.selectList}
        optionSelectedStyle={styles.selectOptionSelected}
        optionTextStyle={styles.selectOptionText}
        options={options}
        onSelect={onSelect}
        value={value}
      />
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
  selectControl: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary200,
    color: GlobalStyles.colors.primary400,
    fontSize: 16,
    backgroundColor: GlobalStyles.colors.white200,
  },
  selectList: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary200,
  },
  selectOptionSelected: {
    backgroundColor: GlobalStyles.colors.primary200,
    color: GlobalStyles.colors.accent100,
  },
  selectOptionText: {
    color: GlobalStyles.colors.primary400,
  },
});

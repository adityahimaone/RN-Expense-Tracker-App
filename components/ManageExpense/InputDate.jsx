import { StyleSheet, Text, View, Platform } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import PropTypes from 'prop-types';

import Button from 'components/UI/Button';
import { GlobalStyles } from 'constants/style';

InputDate.propTypes = {
  label: PropTypes.string,
  //   date: PropTypes.object,
  onChange: PropTypes.func,
};

export default function InputDate({ label, onChange, value }) {
  const [show, setShow] = useState(false);

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text>Selected: {value.toLocaleString()}</Text>
      <Button onPress={showDatepicker}>Select Date</Button>
      {show && (
        <DateTimePicker
          onTouchCancel={() => setShow(false)}
          onChange={onChange}
          value={value}
          is24Hour={true}
        />
      )}
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
});

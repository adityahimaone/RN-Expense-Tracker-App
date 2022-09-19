import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyles } from 'constants/style';

Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
  mode: PropTypes.oneOf(['flat', '']),
  style: PropTypes.object,
};

export default function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary400,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    borderRadius: 4,
    opacity: 0.5,
    backgroundColor: GlobalStyles.colors.primary100,
  },
});

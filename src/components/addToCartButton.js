import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLORS from '../consts/colors';

const AddToCartButton = ({onpress}) => {
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={styles.buttonWrapper}>
        <Text style={styles.textColor}>Add to Cart</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddToCartButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    height: 50,
    width: 300,
    backgroundColor: COLORS.ButtonColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.White,
  },
});

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../consts/colors';

const LoginButton = ({ButtonText,onpress}) => {
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={styles.ButtonWrapper}>
        <Text style={styles.buttonText}>Login</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  ButtonWrapper: {
    height: 50,
    width: 320,
    backgroundColor: COLORS.ButtonColor,
    justifyContent : "center",
    alignItems : "center",
    flexDirection : "row"
  },
  buttonText : {
   color : "#fff",
   fontWeight : "bold"
  }
});

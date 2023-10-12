import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../consts/colors';
import LoginInput from '../../components/textinput';
import LoginButton from '../../components/LoginButton';

const Login = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.topText}>
        <Text style={styles.toptextStyle}>Practical Test</Text>
      </View>
      <View style={styles.inputBoxMainStyle}>
        <LoginInput secureText={false} placeHolderText={'UserName'} />
      
      </View>
      <View  style={[styles.inputBoxMainStyle,{marginTop : 20}]}>
         <LoginInput secureText={true} placeHolderText={'Password'} />
      </View>
      <View style={styles.buttonWrapper}>
        <LoginButton/>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  topText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 150,
  },
  toptextStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.Black,
  },
  inputBoxMainStyle : {
    justifyContent : "center",
    alignItems : "center",
    marginTop : 90,
    flexDirection : "column",
  },
  buttonWrapper : {
    justifyContent : "center",
    alignItems : "center",
    marginTop : 50,
    
  }
});

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';

import COLORS from '../../consts/colors';
import LoginInput from '../../components/textinput';
import LoginButton from '../../components/LoginButton';
import PasswordTextInput from '../../components/passwordTextInput';
import {useDispatch, useSelector} from 'react-redux';
import {signupUser} from '../../redux/feature/LoginSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {data,isSuccess,loading,message} = useSelector(state => state.login);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');



  useEffect(() => {
    if(data !== undefined){
     
      navigation.navigate('Tabs');
      tokenSet();
    } 
  }, [data]);

  const tokenSet = useCallback(async() => {
    try{
      
      await AsyncStorage.setItem('UserToken', 'login'); 
    }catch(error){
          console.log("error_set_user_token",error);
    }
  }, []);


  const LoginUser = useCallback(async() => {
    if (
      userName !== null &&
      userName !== '' &&
      password !== '' &&
      password !== null
    ) {
      //dispach data
      dispatch(signupUser({username: userName, password: password}));

     
      // navigation.navigate('Tabs');
    }
  }, [userName, password]);
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.topText}>
        <Text style={styles.toptextStyle}>Practical Test</Text>
      </View>
      <View style={styles.inputBoxMainStyle}>
        <LoginInput
          secureText={false}
          placeHolderText={'Username'}
          userName={value => {
            setUserName(value);
          }}
        />
      </View>
      <View style={[styles.inputBoxMainStyle, {marginTop: 20}]}>
        <PasswordTextInput
          placeHolderText={'Password'}
          Password={pass => {
            setPassword(pass);
          }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <LoginButton
         ButtonText={"Login"}
          onpress={() => {
            LoginUser();
            //
          }}
        />
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
  inputBoxMainStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
    flexDirection: 'column',
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useCallback, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from '../../consts/colors';

const InitialScreen = ({navigation}) => {
  const [login, setLogin] = useState('');
  useEffect(() => {
    loginCheck();
  }, []);
  const loginCheck = useCallback(async () => {
    try {
      let user = await AsyncStorage.getItem('UserToken');
      setLogin(user);
      console.log('userToken', user);
      //   if(user === "login"){
      //     navigation.navigate("Tabs");
      //  } else if(user == null){
      //     navigation.navigate("Login");
      //  }
    } catch (error) {
      console.log('Token_failed', error);
    }

 
  }, []);

  useEffect(() => {
    if (login === 'login') {
      navigation.navigate('Tabs');
    } else if (login == null) {
      navigation.navigate('Login');
    }
  }, [login]);
  return (
    <SafeAreaView style={styles.stylesMainWrapper}>
      <ActivityIndicator size="large" color={COLORS.ButtonColor} />
      <Text style={styles.mainText}>Please Wait....</Text>
    </SafeAreaView>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  stylesMainWrapper: {
    flex: 1,
    backgroundColor: COLORS.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

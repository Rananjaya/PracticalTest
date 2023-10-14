import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import COLORS from '../../consts/colors';
import HeaderWithDirections from '../../components/headerWithDirections';
import LoginButton from '../../components/LoginButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const checkout = ({navigation, route}) => {
  const {cart} = route.params;
  console.log('cxzcxczxczc', cart);

 

  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach(product => {
      totalPrice += product.price;
    });
    return totalPrice;
  };
  const totalPrice = getTotalPrice();
  return (
    <SafeAreaView style={styles.MainWrapper}>
      <View>
        <HeaderWithDirections
          headerText={'Checkout'}
          onpress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Total</Text>
      </View>
      <View
        style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40, fontWeight: 'bold'}}>
          $ {totalPrice}.00
        </Text>
      </View>
      <View style={styles.cashOn}>
        <Text style={styles.cashOndelText}>Payment Method</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            // flexDirection : "row",
            height: 16,
            width: 16,
            backgroundColor: COLORS.Black,
            borderRadius: 10,
            marginLeft: 9,
            marginTop: 10,
          }}></View>
        <View>
          <Text
            style={[
              styles.textStyle,
              {fontSize: 15, marginTop: 10, marginLeft: 10},
            ]}>
            Cash On Delivery
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 200,
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <LoginButton
          ButtonText={'Paynow'}
          onpress={async () => {
            try {
              await AsyncStorage.clear();
              navigation.navigate('Home');
            } catch (error) {
              console.log(error);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default checkout;

const styles = StyleSheet.create({
  MainWrapper: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  textStyle: {
    fontSize: 30,
  },
  cashOn: {
    marginTop: 60,
    marginLeft: 10,
    //justifyContent : "center",
    //    alignItems : "center"
  },
  cashOndelText: {
    fontSize: 20,
  },
});

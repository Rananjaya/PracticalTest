import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import COLORS from '../../consts/colors';
import HeaderWithDirections from '../../components/headerWithDirections';

const checkout = ({navigation, route}) => {
    const {cart} = route.params;
    console.log("cxzcxczxczc",cart)

//   useEffect(()=>{
//     const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

// console.log("Total Price: ", total);
//   },[])

const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach(product => {
      totalPrice += product.price;
    });
    return totalPrice;
  };
  const totalPrice = getTotalPrice();
  return (
    <SafeAreaView style={(styles.MainWrapper)}>
      <View>
        <HeaderWithDirections
          headerText={'Checkout'}
          onpress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={{padding:10}}>
        <Text style={{fontSize :20,fontWeight :"bold"}}>Total</Text>
      </View>
      <View style={{padding:10, 
        justifyContent : "center",
        alignItems : "center"
        }}>
        <Text style={{fontSize :40,fontWeight :"bold"}}>$ {totalPrice}</Text>
      </View>
    </SafeAreaView>
  );
};

export default checkout;

const styles = StyleSheet.create({
  MainWrapper: {
    flex :1,
    backgroundColor: COLORS.White,
   },
   textStyle : {
    fontSize :30
   }
});

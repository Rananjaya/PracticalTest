import { SafeAreaView, StyleSheet, Text, View,ScrollView,FlatList } from 'react-native'
import React, { useEffect,useCallback,useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import HeaderWithDirections from '../../components/headerWithDirections';
import CartList from '../../components/cartList';
import COLORS from '../../consts/colors'

const Cart = ({navigation}) => {
  const [cart, setCart] = useState(['']);
  const isFocused = useIsFocused();
  useEffect(()=>{
    if(isFocused){
      getCart();
    }
    
  },[isFocused])

  const getCart = useCallback(async() => {
    try {
      var cart_items = await AsyncStorage.getItem('Cart2');
      let newcart = JSON.parse(cart_items);
      let newdata = JSON.stringify(cart_items);
      setCart(newcart);
      console.log("getCart",cart_items)
    } catch(error) {
         console.log("ErrorGetDataFromLocal",error)
    }
  
  }, []);
  return (
  <SafeAreaView style={styles.mainWrapper}>
      <View>
          <HeaderWithDirections headerText={"Cart"} onpress={()=>{
              navigation.goBack();
          }}/>
      </View>
      <ScrollView>
      <View style={styles.cartListStyle}>
      <FlatList
        horizontal={false}
        data={cart}
        renderItem={({ item }) => (
           <CartList imageURL={item.imageData} title={item.title} quntity={item.quntitiy} price={item.price}/>
        )}
        />
        
      </View>
      </ScrollView>
    
  </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  mainWrapper : {
    flex :1,
    backgroundColor : COLORS.White
  },
  cartListStyle : {
    justifyContent : "center",
    alignItems : "center",
    marginTop : 10
  }
})
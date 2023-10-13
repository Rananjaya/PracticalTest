import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useCallback, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import HeaderWithDirections from '../../components/headerWithDirections';
import CartList from '../../components/cartList';
import COLORS from '../../consts/colors';
import LoginButton from '../../components/LoginButton';

const Cart = ({navigation}) => {
  const [cart, setCart] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      getCart();
    }
  }, [isFocused]);

  const getCart = useCallback(async () => {
    try {
      var cart_items = await AsyncStorage.getItem('Cart2');
      let newcart = JSON.parse(cart_items);
      let newdata = JSON.stringify(cart_items);
      setCart(newcart);
    } catch (error) {
      console.log('ErrorGetDataFromLocal', error);
    }
    console.log('sssss', cart);
  }, []);

  const DeleteByID = useCallback(async deleteID => {
    const filteredData = cart.filter(item => item.id !== deleteID);
    try {
      await AsyncStorage.setItem('Cart2', JSON.stringify(filteredData));
    } catch (err) {
      console.log(err, 'error delete');
    }
    console.log('filter_data', filteredData);
    setCart(filteredData);
  }, []);
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View>
        <HeaderWithDirections
          headerText={'Cart'}
          onpress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView>
        {cart !== '' && cart !== undefined && (
          <View style={styles.cartListStyle}>
            <FlatList
              horizontal={false}
              data={cart}
              renderItem={({item}) => (
                <CartList
                  imageURL={item.imageData}
                  title={item.title}
                  quntity={item.quntitiy}
                  price={item.price}
                  onpressDelete={() => {
                    DeleteByID(item.id);
                  }}
                />
              )}
            />
          </View>
        )}
        {cart === null && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              Your Cart is Empty
            </Text>
          </View>
        )}
        <View style={styles.buttonWrapper}>
           <LoginButton countValue={true} count={cart.length} onpress={()=>{
              navigation.navigate("Checkout")
           }} ButtonText={"Chekcout"}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  cartListStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonWrapper : {
    justifyContent : "center",
    alignItems: "center",
    marginTop : 10
  }
});

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

const deleteItem = async (id) => {
  try {
    const updatedData = cart.filter(item => item.id !== id);
    await AsyncStorage.setItem('Cart2', JSON.stringify(updatedData));
    setCart(updatedData);
  } catch (error) {
    console.log('deleteError', error);
  }
};
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
                    deleteItem(item.id);
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
        {cart !== null &&
          <View style={styles.buttonWrapper}>
            <LoginButton
              countValue={true}
              count={cart === null ? 0 : cart.length}
              onpress={() => {
                navigation.navigate('Checkout',{
                  cart : cart
                });
              }}
              ButtonText={'Chekcout'}
            />
          </View>
        }
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
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

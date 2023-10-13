import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import HeaderWithDirections from '../../components/headerWithDirections';
import COLORS from '../../consts/colors';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProductsbyId} from '../../redux/feature/ProductByIdSlice';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Swiper from '../../components/swiper';
import Slider from 'react-native-slider';
import AddToCartButton from '../../components/addToCartButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductsDetils = ({navigation, route}) => {
  const [fullValue, setValue] = useState(1);
  const dispatch = useDispatch();
  const {data, isSuccess, loading, message} = useSelector(
    state => state.getprobyid,
  );
  const {Product_id} = route.params;
  console.log('whatsisacctualdata', data);

  useEffect(() => {
    dispatch(getAllProductsbyId({id: Product_id}));
  }, [Product_id]);

  const AddToCart = useCallback(async () => {
    var items = {
      id: data.id,
      title: data.title,
      price: data.price,
      quntitiy: fullValue,
    };
    let existingProducts = await AsyncStorage.getItem('Cart2');
    let newProduct = JSON.parse(existingProducts);
    if (!newProduct) {
      newProduct = [];
    }
    newProduct.push(items);
    try {
      await AsyncStorage.setItem('Cart2', JSON.stringify(newProduct));
      Alert.alert('Alert', 'Product add to cart', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
   } catch (err) {
      console.log('error add cart', err);
    }
  }, [data, fullValue]);

  return (
    <SafeAreaView style={styles.mainView}>
      <View>
        <HeaderWithDirections
          onpress={() => {
            navigation.goBack();
          }}
        />
      </View>

      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        <FlatList
          contentContainerStyle={{paddingLeft: 20}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data.images}
          renderItem={({item}) => <Swiper dataa={item} />}
        />
      </View>

      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{data.title}</Text>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          {data.description}
        </Text>
      </View>
      <View style={styles.bottomRow}>
        <Text style={styles.textStyle}>Price</Text>
        <Text style={styles.textStyle}>{data.price} $</Text>
      </View>
      <View style={[styles.bottomRow, {marginTop: 1}]}>
        <Text style={styles.textStyle}>feedback</Text>
        <View>
          <Rating
            type="custom"
            ratingCount={data.rating}
            imageSize={20}
            ratingColor={COLORS.ButtonColor}
            ratingBackgroundColo={'#fff'}
          />
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.textStyle}>Quntity</Text>
      </View>
      <View style={{padding: 50}}>
        <Slider
          minimumValue={0}
          maximumValue={data.stock}
          step={1}
          onValueChange={arg => {
            setValue(arg);
          }}
        />
        <Text>{fullValue}</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <AddToCartButton
          onpress={() => {
            AddToCart();
            console.log('presss');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductsDetils;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: COLORS.White,
    flex: 1,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginTop: 10,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

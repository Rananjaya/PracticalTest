import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import HeaderWithDirections from '../../components/headerWithDirections';
import COLORS from '../../consts/colors';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProductsbyId} from '../../redux/feature/ProductByIdSlice';

const ProductsDetils = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {data,isSuccess,loading,message} = useSelector(state => state.getprobyid);
  const {Product_id} = route.params;
  console.log('dfsdfdfsd', Product_id);
  useEffect(() => {
    dispatch(getAllProductsbyId({id: Product_id}));
  }, [Product_id]);
  return (
    <SafeAreaView style={styles.mainView}>
      <View>
        <HeaderWithDirections
          onpress={() => {
            navigation.goBack();
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
});

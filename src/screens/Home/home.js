import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  FlatList,
  BackHandler,
  Alert
} from 'react-native';
import React, { useEffect } from 'react';
import COLORS from '../../consts/colors';
import NormalHeader from '../../components/normalHeader';
import ProductCards from '../../components/ProductCards';
import {useDispatch, useSelector} from 'react-redux';
import { getAllProducts } from '../../redux/feature/ProductSlice';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.product)
  console.log("alllllll",data)

 useEffect(()=>{
   dispatch(getAllProducts());
 },[])

 useEffect(() => {
  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction,
  );

  return () => backHandler.remove();
}, []);

  return (
    <SafeAreaView style={styles.MainWrpapper}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.White} />
      <View>
        <NormalHeader headerText={'Products'} />
      </View>
      <ScrollView>
        {/* List */}
        <View style={styles.cardWrapper}>
        <FlatList
        horizontal={false}
        data={data}
        renderItem={({ item }) => (
          
            <ProductCards onpress={()=>{
              console.log("press")
              
              navigation.navigate('ProductsDetils',{
                Product_id: item.id
              });
            }} data={item} />
          
        )}
        />
          {/* <ProductCards /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  MainWrpapper: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  cardWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
   
  },
});

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { useEffect } from 'react';
import COLORS from '../../consts/colors';
import NormalHeader from '../../components/normalHeader';
import ProductCards from '../../components/ProductCards';
import {useDispatch, useSelector} from 'react-redux';
import { getAllProducts } from '../../redux/feature/ProductSlice';

const Home = () => {
  const dispatch = useDispatch();
  // const {data,isSuccess,loading,message} = useSelector(state => state.products);
 const {data} = useSelector(state => state.product)
  console.log("alllllll",data)

 useEffect(()=>{
  //   dispatch(signupUser({username: userName, password: password}));
  dispatch(getAllProducts());
 },[])

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
          
            <ProductCards data={item} />
          
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
    marginTop: 70,
  },
});

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const window = Dimensions.get('window');

const SwiperSlider = ({dataa}) => {
  const [dataValue, setData] = useState([]);


  return (
    <View style={styles.slideCard}>
      <ImageBackground
        style={{flex: 1, borderRadius: 10}}
        source={{
          uri: dataa,
        }}
      />
  
    </View>
 
  );
};

export default SwiperSlider;

const styles = StyleSheet.create({
  imagesStyle: {flex: 1},
  wrapper: {
    //backgroundColor : "#000",
    // position : "absolute"
    height: window.width * 0.67,
    //  height : 300
  },
  paginationStyle: {
    bottom: window.height * -0.01,
  },
  sideButton1: {
    fontSize: 40,
    color: '#fff',
    marginLeft: 20,
  },
  sideButton2: {
    fontSize: 40,
    color: '#fff',
    marginReft: 10,
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerWrapper: {
    width: window.width * 0.9,
    height: window.height * 0.32,
    borderRadius: 20,
    //elevation: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  slideCard: {
    height: 200,
    width: 350,
    // backgroundColor : "#000",
    borderRadius: 10,marginRight :10
  },
});

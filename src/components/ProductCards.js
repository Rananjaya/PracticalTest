import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../consts/colors';

const productCards = ({data, onpress}) => {
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={styles.cards}>
        <View style={styles.conHeadder}>
          <Text style={styles.headerMainTextStyle}>{data.brand}</Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text>{data.description}</Text>
        </View>
        <Image
          style={styles.imageStyle}
          source={{
            uri: data.thumbnail,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default productCards;

const styles = StyleSheet.create({
  cards: {
    width: 350,
    backgroundColor: COLORS.White,
    elevation: 10,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
  },
  conHeadder: {},
  headerMainTextStyle: {
    fontSize: 18,
    color: COLORS.headerFontColor,
  },
  imageStyle: {
    height: 200,
    marginTop: 10,
  },
});

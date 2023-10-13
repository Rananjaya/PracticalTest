import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import COLORS from '../consts/colors';

const cartList = ({title, quntity, price, imageURL,onpressDelete}) => {
  return (
    <TouchableOpacity>
      <View style={styles.listWrapper}>
        <View style={styles.MainRow}>
          <View style={{flexDirection: 'row', }}>
            <View>
              <Image
                style={styles.tumb}
                source={{
                  uri: imageURL,
                }}
              />
            </View>
            <View style={{marginLeft: 10, marginTop: 10}}>
              <Text style={styles.textStyleMain}>{title}</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{marginTop: 10}}>
                  <Text>Quntity</Text>
                </View>
                <View style={{marginLeft: 10, marginTop: 10}}>
                  <Text>{quntity}</Text>
                </View>
                <View style={{marginLeft: 10, marginTop: 10}}>
                  <TouchableOpacity onPress={onpressDelete}>
                    <Text style={styles.textStyle}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection : "row", marginLeft :80, justifyContent : "center", alignItems : "center"}}>
            <Text>$</Text>
            <Text style={{fontWeight :"bold"}}>{price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default cartList;

const styles = StyleSheet.create({
  listWrapper: {
    // height: 100,
    width: 350,
    backgroundColor: COLORS.White,
    borderRadius: 10,
    elevation: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
  },
  MainRow: {
    flexDirection: 'row',
    // flex : 0.5
    //  justifyContent : "center" ,
    //alignItems :"center"
  },
  tumb: {
    height: 80,
    width: 80,
  },
  textStyleMain: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'red',
  },
});

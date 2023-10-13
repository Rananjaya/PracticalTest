import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderWithDirections = ({onpress,headerText}) => {
  return (
    <View style={styles.headerWrpapper}>
      <View>
        <TouchableOpacity onPress={onpress}>
          <Icon name="arrow-left" size={30} />
        </TouchableOpacity>
      </View>
      <Text style={styles.headerText}>{headerText}</Text>
      <Text style={styles.headerText}></Text>
    </View>
  );
};

export default HeaderWithDirections;

const styles = StyleSheet.create({
  headerWrpapper: {
    height: 65,
    // width : 10,
    backgroundColor: COLORS.White,
    elevation: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.headerFontColor,
  },
});

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../consts/colors';

const checkout = () => {
  return (
    <SafeAreaView style={(styles = styles.MainWrapper)}>
      <View>
        <HeaderWithDirections
          headerText={'Cart'}
          onpress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default checkout;

const styles = StyleSheet.create({
  MainWrapper: {
    backgroundColor: COLORS.White,
  },
});

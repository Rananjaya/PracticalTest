import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderWithDirections from '../../components/headerWithDirections'
import COLORS from '../../consts/colors'

const ProductsDetils = ({navigation}) => {
  return (
   <SafeAreaView style={styles.mainView}>
    <View>
       <HeaderWithDirections onpress={()=>{
               navigation.goBack();
       }}/>
    </View>
   </SafeAreaView>
  )
}

export default ProductsDetils

const styles = StyleSheet.create({
    mainView : {
        backgroundColor : COLORS.White,
        flex : 1
    }
})
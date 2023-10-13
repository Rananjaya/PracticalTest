import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import COLORS from '../consts/colors'

const productCards = () => {
  return (
    <View style={styles.cards}>
       <View style={styles.conHeadder}>
           <Text style={styles.headerMainTextStyle}>Iphone 9</Text>
       </View>
       <View>
           <Text>Apple Mobile. lncfknclkxncxc. lcnlxzkcn.sdfsdfsdfsfsdfsdf</Text>
       </View>
       <Image style={styles.imageStyle} source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}/>
    </View>
  )
}

export default productCards

const styles = StyleSheet.create({
    cards : {
        // flexDirection : "row",
        // justifyContent : "center",
        // alignItems : "center",
        // height : 150,
        width : 350,
        backgroundColor : COLORS.White,
        elevation : 10,
        borderRadius : 10,
        marginVertical : 10,
        padding : 10
    },
    conHeadder : {

    },
    headerMainTextStyle : {
        fontSize : 16,
        color : COLORS.headerFontColor,

    },
    imageStyle : {
        height : 100,
        width : 100
    }
})
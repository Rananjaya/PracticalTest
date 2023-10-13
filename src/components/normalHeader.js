import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../consts/colors'

const normalHeader = ({headerText}) => {
  return (
    <View style={styles.headerWrpapper}>
       <Text style={styles.headerText}>{headerText}</Text>
    </View>
  )
}

export default normalHeader

const styles = StyleSheet.create({
    headerWrpapper : {
        height : 65,
        // width : 10,
        backgroundColor : COLORS.White,
        elevation : 10,
        flexDirection :"row",
        justifyContent : "center",
        alignItems : "center"

    },
    headerText : {
        fontSize : 20,
        fontWeight : "bold",
        color : COLORS.headerFontColor
    }
})
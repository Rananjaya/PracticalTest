import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import COLORS from '../consts/colors'

const LoginInput = ({secureText,placeHolderText}) => {
  return (
    <View style={styles.textinputMainStyle}>
       <TextInput secureTextEntry={secureText === true ? true : false} placeholder={placeHolderText}/>
    </View>
  )
}

export default LoginInput

const styles = StyleSheet.create({
    textinputMainStyle : {
        height : 40,
        width : 320,
        borderWidth : 1,
        borderColor : COLORS.gray
    }
})
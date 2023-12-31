import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState} from 'react'
import COLORS from '../consts/colors'

const LoginInput = ({secureText,placeHolderText,userName}) => {
  
  return (
    <View style={styles.textinputMainStyle}>
       <TextInput onChangeText={userName} secureTextEntry={secureText === true ? true : false} placeholder={placeHolderText}/>
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
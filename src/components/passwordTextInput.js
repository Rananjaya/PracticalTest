import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import COLORS from '../consts/colors'

const PasswordTextInput = ({secureText,placeHolderText,Password}) => {
  return (
    <View style={styles.textinputMainStyle}>
       <TextInput secureTextEntry={true} placeholder={placeHolderText} onChangeText={Password}/>
    </View>
  )
}

export default PasswordTextInput

const styles = StyleSheet.create({
    textinputMainStyle : {
        height : 40,
        width : 320,
        borderWidth : 1,
        borderColor : COLORS.gray
    }
})
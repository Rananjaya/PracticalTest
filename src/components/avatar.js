import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import COLORS from '../consts/colors'

const Avatar = ({imageUrl}) => {
  return (
    <View style={styles.mainWrapper}>
         <Image
        style={styles.avatStyle}
        source={{
          uri: imageUrl,
        }}
      />
    </View>
  )
}

export default Avatar

const styles = StyleSheet.create({
    mainWrapper: {
        height : 100,
        width : 100,
        backgroundColor : COLORS.White,
        borderRadius : 100,
        elevation : 10,
        justifyContent : "center",
        alignItems : "center"
    },
    avatStyle : {
        height : 100,
        width :100,
        borderRadius : 100,
    }
})
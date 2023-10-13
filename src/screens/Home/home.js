import { SafeAreaView, StyleSheet, Text, View, StatusBar,ScrollView } from 'react-native'
import React from 'react'
import COLORS from '../../consts/colors';
import NormalHeader from '../../components/normalHeader';
import ProductCards from '../../components/ProductCards';
const Home = () => {
  return (
  <SafeAreaView style={styles.MainWrpapper}>
    <StatusBar barStyle="dark-content" backgroundColor={COLORS.White} />
     <View>
        <NormalHeader headerText={"Products"}/>
     </View>
     <ScrollView>
        {/* List */}
        <View style={styles.cardWrapper}>
          <ProductCards/>
        </View>
        
       
     </ScrollView>

  </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  MainWrpapper : {
    flex : 1,
    backgroundColor : COLORS.White,
  },
  cardWrapper : {
    justifyContent : "center",
    alignItems : "center",
    marginTop : 70
  }
})
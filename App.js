import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home/home';
import Cart from './src/screens/Cart/cart';
import Profile from './src/screens/Profile/profile';
import Login from './src/screens/Login/login';
import Checkout from './src/screens/Checkout/checkout';
import ProductDetils from './src/screens/ProdcutsDetils/productsDetils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import FirstScreen from './src/screens/InitialScreen/initialScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const CreateBottomTab = () => {
  return(
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={Home} 
    options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <Icon name="home"  size={30} />
      ),
    }} />
    <Tab.Screen name="Cart" component={Cart}  
     options={{
      tabBarLabel: 'Cart',
      tabBarIcon: ({ color, size }) => (
        <Icon name="cart-arrow-right"  size={30} />
      ),
    }} />
    <Tab.Screen name="Profile" component={Profile}  options={{
      tabBarLabel: 'Profile',
      tabBarIcon: ({ color, size }) => (
        <Icon name="account"  size={30} />
      ),
    }} />
  </Tab.Navigator>
  )
}

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tabs" component={CreateBottomTab} />
        <Stack.Screen name="ProductsDetils" component={ProductDetils} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  )
}

export default App

const styles = StyleSheet.create({})
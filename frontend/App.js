import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './component/LoginScreen.js';
import SplashScreen from './component/SplashScreen.js';
import DashboardScreen from "./components/DashboardScreen";


const Stack = createStackNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Dashboard" component={DashboardScreen} /> ADD DASHBOARD COMPONENT HERE */} 
      </Stack.Navigator>
    </NavigationContainer>
  );
}



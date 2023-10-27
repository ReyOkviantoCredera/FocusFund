import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen.js';
import SplashScreen from './components/SplashScreen.js';
import DashboardScreen from "./components/DashboardScreen";
import EducationScreen from './components/EducationScreen.js';


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
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Education" component={EducationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



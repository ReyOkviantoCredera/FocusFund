import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './component/LoginScreen.js';
import SplashScreen from './component/SplashScreen.js';


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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1F2B',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#1A1F2B',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

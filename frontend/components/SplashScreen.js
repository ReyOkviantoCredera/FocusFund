import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.icon} />
      <Text style={styles.title}>FocusFund</Text>
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1F2B',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '30%'
  },
  title: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#1A1F2B',
    fontSize: 13,
    fontWeight: 'bold',
  }, 
  icon: {
    width: 150,
    height: 150,
    marginBottom: 16,
    marginTop: 16,
  },
});

export default SplashScreen;

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3A4F',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  title: {
    color: '#B4C2DC',
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#E0E0E0',
    fontSize: 16,
    opacity: 0.5
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
  iconAlign: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#2C3A4F',
    marginTop: 50
  },
  icon: {
    margin: 30,
    color: '#B4C2DC'
  }
});


export default function DashboardScreen() {

  const [count, setCount] = useState(0);
  const addOne = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconAlign}>
        <TouchableOpacity style={{flex: 1}} onPress={addOne}>
          <Ionicons name="menu-outline" size={50} style={styles.icon}/>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={addOne}>
          <MaterialIcons name="account-circle" size={50} style={styles.icon}/>
        </TouchableOpacity>
      </View>
      <View style={{marginLeft: 30}}>
        <Text style={styles.title}>Hello, User!</Text>
        <Text style={styles.subtitle}>Have a nice day.</Text>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.countContainer}>
          <Text>Count: {count}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={addOne}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity> 
      </View>
    </View>
  );
};

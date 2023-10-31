import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import MainContentCardComponent from './MainCard';
import SubContentCardComponent from './SubcontentCard';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3A4F',
  },
  mainContent: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
  },
  subContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
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


export default function EducationScreen({navigation}) {

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
            <Text style={styles.title}>Education</Text>
            <Text style={styles.subtitle}>Explore, Discover, Learn.</Text>
        </View>
        <View style={styles.mainContent}>

            <MainContentCardComponent cardObj={
                {
                title: "Card 1",
                subtitle: "Reading",
                content: "Template 1"
                }
            }></MainContentCardComponent>
        
        </View>
        <View style={styles.subContent}>

            <SubContentCardComponent cardObj={
                {
                title: "Code Quality",
                subtitle: "30 minutes",
                content: "Template 2"
                }
            }></SubContentCardComponent>
            <SubContentCardComponent cardObj={
                {
                title: "Backlog Grooming Tips",
                subtitle: "20 minutes",
                content: "Template 2"
                }
            }></SubContentCardComponent>

        </View>

    </View>
  );
};

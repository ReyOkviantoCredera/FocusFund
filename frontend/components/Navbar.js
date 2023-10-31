import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Navbar = () => {
    const navigation = useNavigation();
    const handleIconPress = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleIconPress('Dashboard')}>
                <Ionicons name="home" size={24} style={styles.button} />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => handleIconPress('CodingMini')}>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity> */}
            {/* <TouchableOpacity onPress={() => handleIconPress('GeneralMini')}>
            <Ionicons name="notifications" size={24} color="black" />
          </TouchableOpacity> */}
            <TouchableOpacity onPress={() => handleIconPress('Education')}>
                <Ionicons name="book-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
        backgroundColor: '#2C3A4F',
        paddingBottom: 20,

    },
    button: {
        color: '#FFFFFF',
    },
});


export default Navbar;

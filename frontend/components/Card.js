import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        width: '40%',
        height: '25%',
        margin: 10
    }
});

function IconSelection(obj){

    let iconComponent = <AntDesign name="caretright" size={24} color="black" />;

    if (obj['subtitle'] == 'LeetCode') {
        iconComponent = <AntDesign name="codesquareo" size={30} color="black" />;
    } else if (obj['subtitle'] == 'Reading') {
        iconComponent = <AntDesign name="book" size={30} color="black" />;
    }
    const selectedIcon = props => iconComponent;
    return selectedIcon;
}

export default function CardComponent({cardObj}) {

    let leftIcon = IconSelection(cardObj);

    return (

        <TouchableOpacity style={styles.container}>
            
            <Card>
            <Card.Title title={cardObj.title} subtitle={cardObj.subtitle} left={leftIcon}/>
            <Card.Content>
                <Text variant="titleLarge">Hello</Text>
                <Text variant="bodyMedium">{cardObj.content}</Text>
            </Card.Content>

            </Card>
            
        </TouchableOpacity>
    );
};
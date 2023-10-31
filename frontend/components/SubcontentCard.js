import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        width: '80%',
        margin: 10
    },
    card: {
        backgroundColor: 'cyan'
    }
});

function IconSelection(obj){

    let iconComponent = <MaterialCommunityIcons name="book-education-outline" size={30} color="black" />

    // if (obj['subtitle'] == 'LeetCode') {
    //     iconComponent = <AntDesign name="codesquareo" size={30} color="black" />;
    // } else if (obj['subtitle'] == 'Reading') {
    //     iconComponent = <AntDesign name="book" size={30} color="black" />;
    // }
    const selectedIcon = props => iconComponent;
    return selectedIcon;
}

export default function SubContentCardComponent({cardObj}) {

    let leftIcon = IconSelection(cardObj);

    return (

        <TouchableOpacity style={styles.container}>
            
            <Card>
                <Card.Title title={cardObj.title} subtitle={cardObj.subtitle} left={leftIcon}/>
                {/* <Card.Content>
                    <Text variant="titleLarge">Hello</Text>
                    <Text variant="bodyMedium">{cardObj.content}</Text>
                </Card.Content> */}

            </Card>
            
        </TouchableOpacity>
    );
};
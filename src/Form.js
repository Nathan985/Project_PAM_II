import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const UselessTextInput = () => {

    return (
        <View style={Style.Container}>
            <Text style={Style.TextStyle}>Pessoa 1</Text>
            <TextInput key="PeopleOne"
                style={Style.InputStyle}
            />
            <Text style={Style.TextStyle}>Pessoa 2</Text>
            <TextInput key="PeopleTwo"
                style={Style.InputStyle}
            />
            <Button
                icon={
                    <Icon
                        name="arrow-right"
                        size={15}
                        color="white"
                    />
                }
                title="Button with icon component"
            />
        </View>
    );
}

const Style = StyleSheet.create({
    Container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        textAlign: "left"
    },
    InputStyle: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        aspectRatio: 7,
    },
    TextStyle: {
        marginTop: 50,
        fontSize: 30,
        color: 'black'
    },
    ButtonStyle: {
        marginTop: 30,
        aspectRatio: 6,
    }
})

export default UselessTextInput;

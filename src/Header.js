import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Style = StyleSheet.create({
    container:{
        marginTop: 23,
        backgroundColor: '#DC143C',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextStyle:{
        fontSize: 50,
        color: '#fff'
    }
}
);

const Header = (props) =>(

    <View style={Style.container}>
        <Text style={Style.TextStyle}>
            Teste do Amor
        </Text>
    </View>

);



export default Header;
import React from 'react';
import {View, StyleSheet} from 'react-native';

const FormRow = props => {

    const {children} = props

    return(
        <View style= {style.Container}>
            {children}
        </View>
    );

}

const style = StyleSheet.create({

    Container: {
        padding: 10,
        backgroundColor: '#fff',
        marginTop: 5,
        marginBottom: 5,
        elevation: 2
    }

})

export default FormRow;
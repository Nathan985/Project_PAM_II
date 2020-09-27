import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { color } from 'react-native-reanimated';

import FormRow from './Components/FormRow';

export default class LoginPage extends Component {

    constructor(props) {

        super(props)

        this.state = {

            PeopleOne: "",
            PeopleTwo: ""

        }

    }

    HandlerChange(event, type) {
        const valor = event.nativeEvent.text

        if (type === 1) {
            this.setState({

                PeopleOne: valor
            })
        }
        if (type === 2) {
            this.setState({

                PeopleTwo: valor
            })
        }
    }

    render() {
        return (
            <View style={styles.Container}>
                <Text style={styles.Title}>Veja se o @ é o amor da sua vida!</Text>
                <FormRow>
                    <TextInput onChange={event => this.HandlerChange(event, 1)} style={styles.TextInput} placeholder="Pessoa 1"></TextInput>
                </FormRow>

                <FormRow>
                    <TextInput onChange={event => this.HandlerChange(event, 2)} style={styles.TextInput} placeholder="Pessoa 2" ></TextInput>
                </FormRow>
                    <Button
                        // background= "#DC143C"
                        title="Calcular"
                        type="solid"
                        buttonStyle={styles.ButtonStyle}
                        onPress={() => {console.log(this.state.PeopleOne)}}
                    />
            </View>
        )
        
    }


}

const styles = StyleSheet.create({
    TextInput: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10,
        aspectRatio: 10
    },
    ButtonStyle: {
        color: '#fff',
        // borderColor: '#DC143C'
        marginTop: 15,
        backgroundColor: '#DC143C',
        aspectRatio: 8
    },
    Container: {
        marginTop: 115,
        alignItems: 'center'
        // flexDirection: "row"
    },
    ContainerTouch: {
        alignItems: 'center'
        // flexDirection: "row"
    },
    Title: {
        marginBottom: 25,
        fontSize: 28,
        fontWeight: "bold"
    }
})
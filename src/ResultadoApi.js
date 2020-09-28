import React from 'react';
import axios from 'axios'
import { View, Text, Image, StyleSheet } from 'react-native';

export default class ResultadoApi extends React.Component{

    constructor(props){
        super(props)

        this.state = {

            Peoples: this.props.navigation.state.params.JSON_Infos,
            Porcentagem: "",
            Mensagem:""

        }
    }

    render(){

        return(
            <View style={styles.Container} >
                <Image style={styles.ImageResult} source = {require('./IMG/Coracao.png')} />
                <Text style={styles.PctResult} >{ this.state.Porcentagem }%</Text>
                <Text style={styles.MsgResult} >{ this.state.Mensagem }</Text>
            </View>
        )
    }


    componentDidMount() {

        const axios = require("axios");
        //console.log("Entrou AQUI")

        axios({
            "method": "GET",
            "url": "https://love-calculator.p.rapidapi.com/getPercentage",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "love-calculator.p.rapidapi.com",
                "x-rapidapi-key": "2ad40ef700msha04a814f8ad9b6dp1926fajsn28d1cc632f63",
                "useQueryString": true
            }, "params": {
                "fname": this.state.Peoples[0],
                "sname": this.state.Peoples[1]
            }
        })
            .then((response) => {
                const { data } = response

                this.setState({
                    Porcentagem: data.percentage,
                    Mensagem: data.result

                })
            })
            .catch((error) => {
                console.log(error)
            })

    }

}

const styles = StyleSheet.create({

    ImageResult: {
        width: 450,
        height: 300,
        resizeMode: 'stretch',
    },
    Container: {
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 120
    },
    MsgResult: {
        position: 'absolute',
        marginTop: 130,
        fontSize: 20,
        fontWeight: "bold",
        color: '#fff'
    },
    PctResult: {
        position: 'absolute',
        marginTop: 110,
        fontSize: 20,
        fontWeight: "bold",
        color: '#fff'
    }

})
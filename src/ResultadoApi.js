import React from 'react';
import axios from 'axios'
import { View, Text } from 'react-native';

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
            <View>
                <Text>{ this.state.Porcentagem }%</Text>
                <Text>{ this.state.Mensagem }</Text>
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
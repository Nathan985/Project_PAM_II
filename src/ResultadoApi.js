import React from 'react';
import axios from 'axios'

export default class ResultadoApi extends React.Component{

    constructor(props){
        super(props)

        this.state({

            Porcentagem: ""

        })
    }

    render(){

        const Peoples = this.props.navigation.state.params
        console.log(Peoples);

    }


    // componentDidMount() {

    //     const axios = require("axios");
    //     console.log("Entrou AQUI")

    //     axios({
    //         "method": "GET",
    //         "url": "https://love-calculator.p.rapidapi.com/getPercentage",
    //         "headers": {
    //             "content-type": "application/octet-stream",
    //             "x-rapidapi-host": "love-calculator.p.rapidapi.com",
    //             "x-rapidapi-key": "2ad40ef700msha04a814f8ad9b6dp1926fajsn28d1cc632f63",
    //             "useQueryString": true
    //         }, "params": {
    //             "fname": this.state.PeopleOne,
    //             "sname": this.state.PeopleTwo
    //         }
    //     })
    //         .then((response) => {
    //             this.setState({
    //                 Porcentagem: response
    //             })
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })

    // }

}
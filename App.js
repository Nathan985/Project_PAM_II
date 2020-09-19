// IMPORTS
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import FormJs from './src/Form';

// CLASS APP
export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

      datails: {}

    }
  }

  componentDidMount(peoples) {

    
  }

  render() {
    return (

      <View>
        {<Header />}
        {<FormJs/>}
      </View>

    );
  }

}

// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text>MedWork!</Text>
//             <StatusBar style="auto" />
//         </View>
//     );
// }

// render(){
//     return(
//         <View>
//             {<Header/>}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

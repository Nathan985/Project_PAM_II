import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Form from './src/Form'
import ResultAPI from './src/ResultadoApi'

// Controle de navegções

const AppNavigator = createStackNavigator({

  'Main': {
    screen: Form,
    navigationOptions: {
      title: 'Calculadora do Amor'
    }
  },
  'Result': {
    screen: ResultAPI,
    navigationOptions: {
      title: 'Resultados'
    }
  }

}, {/*STYLE*/
  defaultNavigationOptions:{
    title: 'Calculadora do Amor',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#DC143C',
      borderBottomWidth: 5,
      borderBottomColor: '#c5c5c5',
    },
    headerTitleStyle:{
      color: '#fff',
      fontSize: 30,
      textAlign: "center"
    }
  }
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createSwitchNavigator, createAppContainer} from 'react-navigation'
import { store } from './app/Store'
import { Provider } from 'react-redux'

import Main from './app/Navigation/Navigation'
// import LoginScreen from './src/Screen/LoginScreen'
// import { RoomNavigation } from './src/Navigation/navigate'

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Main/>
      </Provider>
    )
  }
}

// const Root = createSwitchNavigator({
//     Login: {
//       screen: LoginScreen,
//       navigationOptions: {
//         headers: null
//       }
//     },
//     RoomNavigation: {
//       screen: RoomNavigation,
//       navigationOptions: {
//         headers: null
//       },
//     }
// }, {
//   initialRouteName: 'Login'
// })

// const Root = TabNavigator

// export const Main = createAppContainer(Root)

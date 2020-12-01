import * as React from 'react';
import { StyleSheet , Text, View} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import ScreenOne from './screens/ScreenOne.js';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import ScreenTwo from './screens/ScreenTwo';
import Firebase from './config/firebase';






// STYLES

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component{
  render(){
    return(
      <AppNavigator/>
    )
  }
}


export const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  ScreenOne:ScreenOne,
  ScreenTwo:ScreenTwo
});

export const AppNavigator = createAppContainer 
(AppSwitchNavigator);

import * as React from 'react';
import { StyleSheet , Text, View} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import ScreenOne from './screens/ScreenOne.js';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import firebase from 'firebase';
import { firebaseConfig } from './config/firebase';

firebase.initializeApp(firebaseConfig);





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


const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  ScreenOne:ScreenOne
});

const AppNavigator = createAppContainer 
(AppSwitchNavigator)

import * as React from 'react';
import { StyleSheet , Text, View} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
<<<<<<< Updated upstream
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { firebaseConfig } from './config/firebase.js';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import AuthNavigator from './navigation/AuthNavigator';
=======
>>>>>>> Stashed changes
import ScreenOne from './screens/ScreenOne.js';

import firebase from 'firebase';

import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import firebase from 'firebase';
import { firebaseConfig } from './config/firebase';

firebase.initializeApp(firebaseConfig);




// const firebaseConfig = {
//    apiKey: API_KEY,
//    authDomain: AUTH_DOMAIN,
//    databaseURL: DATABASE_URL,
//    projectId: PROJECT_ID,
//    storageBucket: STORAGE_BUCKET,
//    messagingSenderId: MESSAGE_SENDER_ID,
//    appId: APP_ID,
//    measurementId:MEASUREMENT_ID
// }
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


export default createAppContainer(
  
  createSwitchNavigator(
    {
      Auth: AuthNavigator,
      App: ScreenOne,
    },
    {
      initialRouteName: 'Auth'
    }
  )
);

//  BOTTOM NAVIGATION

//import AppNavigator from './navigation/AppNavigator'

// export default function App() {
//   return (
//     <AppNavigator/> 
//   )
// }
import * as React from 'react';
import { StyleSheet , Text, View, SafeAreaView} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import ScreenOne from './screens/ScreenOne.js';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import ScreenTwo from './screens/ScreenTwo';
import EditScreen from './screens/EditScreen';
import Firebase from './config/firebase';

// STYLES

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default class App extends React.Component{
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <PaperProvider >
          <AppNavigator/>
        </PaperProvider>
      </SafeAreaView>

    )
  }
}


export const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  ScreenOne:ScreenOne,
  ScreenTwo:ScreenTwo,
  EditScreen:EditScreen
});

export const AppNavigator = createAppContainer 
(AppSwitchNavigator);

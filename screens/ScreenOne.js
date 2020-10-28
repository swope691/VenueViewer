import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// pull in the ScreenName component from ScreenName.js
import ScreenName from '../components/ScreenName.js'

const TabIcon = (props) => (
    <Ionicons
      name={'md-home'}
      size={35}
      color={props.focused ? 'grey' : 'darkgrey'}
    />
  )
  
export default class ScreenOne extends React.Component {

  // we won't need to configure navigationOptions just yet
  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenName name={'Screen One'/* pass the name prop to ScreenName */} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
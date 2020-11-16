import React from 'react';
import { View, StyleSheet, style } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ScreenName from '../components/ScreenName.js'

const TabIcon = (props) => (
    <Ionicons
      name={'md-apps'}
      size={35}
      color={props.focused ? 'grey' : 'darkgrey'}
    />
  )

export default class ScreenTwo extends React.Component {

  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenName name={'Screen Two'} />
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
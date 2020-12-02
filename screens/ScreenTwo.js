import React from 'react';
import { View, StyleSheet, style, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ScreenName from '../components/ScreenName.js'

// const TabIcon = (props) => (
//     <Ionicons
//       name={'md-apps'}
//       size={35}
//       color={props.focused ? 'grey' : 'darkgrey'}
//     />
//   )

export default class ScreenTwo extends React.Component {

  // static navigationOptions = {
  //   tabBarIcon: TabIcon
  // };

  render() {
    const note = this.props.navigation.getParam('note')
    console.log(note);
    return (
      <View style={styles.container}>
        <ScreenName name={'Screen Two'} />
        <Text>{note.venueName}</Text>
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
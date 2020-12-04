import React from 'react';
import { View, StyleSheet, style, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenTwoHeader from '../components/ScreenTwoHeader'
import ScreenName from '../components/ScreenName.js'
import { Appbar } from 'react-native-paper';
import ScreenOne from './ScreenOne';



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
    const note = this.props.navigation.getParam('note');
    
    console.log(note);
    return (
      
      <View style={styles.container}>
        
        <Appbar.Header>
        <Appbar.BackAction onPress={() => {this.props.navigation.navigate('ScreenOne')}} />
        <Appbar.Content
          title={note.venueName}
          subtitle="Subtitle"
        />
      </Appbar.Header>
      
        <ScreenName name={'Screen Two'} />
        <Text>{note.venueName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
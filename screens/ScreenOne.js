import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, style } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';


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
  state = { user: {} };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.setState({user: user});
      }
    })
 
  }



  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  render() {
    return (

      <View style={styles.container}>
        <Text>{this.state.user.email}</Text>
        <Button title="Sign Out" onPress={() => firebase.auth().signOut()} />
           <ScreenName name={'Screen One' /*pass the name prop to ScreenName*/ } />
      </View>
        // <View style={styles.container}>
        //   <Text>{this.state.user.email}</Text>
        //   </View><Button title="Log Off" onPress={() => {
        //     firebase.auth().signOut()
        //   }}/>
         
        // </View>
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

// export default ScreenOne;
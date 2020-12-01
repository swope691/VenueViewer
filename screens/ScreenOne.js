import React from 'react';
import { StyleSheet, View, Button, Image, Text, ImageBackground} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';


// pull in the ScreenName component from ScreenName.js
import ScreenName from '../components/ScreenName.js'
import { color } from 'react-native-reanimated';

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
    <View style={styles.wrapper}>
      <View style={styles.topscreen}>
        {/* <Text style={{color: "#fff", fontSize: 10}}>{this.state.user.email}</Text> */}
        <Image style={styles.image} source={require("../assets/headlinelogo.jpg")}/>
        <Button color="#fa7d00" title="Sign Out" onPress={() => firebase.auth().signOut()} />
      </View>
      {/* View below the sign out and logo */}
      <View style={styles.newproject}>
        <ImageBackground source={require("../assets/mic.jpg")} style={styles.bgimage}>
          <Button color="#fa7d00" style={styles.text} title="Add New Project"/>
        </ImageBackground>
      </View>
    </View>

      // Screen below sign out and Logo
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
  wrapper:{
    flex: 1
  },
  topscreen: {
    flex: .2,
    alignItems: 'flex-end',
    paddingRight: 30,
    justifyContent: 'center',
    backgroundColor: "black",
    height: 50
  },
  image:{
    height: 70,
    width: 150,
    alignSelf: "center"
  },
  newproject: {
    flex: .3,
    flexDirection: "column",
    height: 50,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgimage:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    color: "white"
  }
});

// export default ScreenOne;
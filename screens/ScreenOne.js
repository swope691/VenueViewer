import React from 'react';
import { StyleSheet, View, Image, Text, ImageBackground, TextInput,
} from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';
import database from '../database';
import {addProject, getNotes} from '../database';
import { ListItem, Divider } from 'react-native-elements';
import CreateNew from '../components/CreateCard';
import Header from '../components/Header';
import DialogForm from '../components/DialogForm';



// pull in the ScreenName component from ScreenName.js
import { FlatList } from 'react-native-gesture-handler';



const TabIcon = (props) => (
    <Ionicons
      name={'md-home'}
      size={35}
      color={props.focused ? 'grey' : 'darkgrey'}
    />
  )

  
export default class ScreenOne extends React.Component {
  state = { 
    user: {},
    notesList: [],
    currentIndex: 0
  };

  onNotesRecieved = (notesList) => {
    
    
    this.setState(prevState => ({
      notesList: prevState.notesList = notesList
    }));
    console.log(notesList);
    
  }

 
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.setState({user: user});
      }
    });

    getNotes(this.onNotesRecieved);
 
  }





  static navigationOptions = {
    tabBarIcon: TabIcon
  };


  render() {
    return (

        <View style={styles.wrapper}>
          <Header/>

          {/* <View style={styles.topscreen}>
            <Text style={{color: "#fff", fontSize: 10}}>{this.state.user.email}</Text>
            <Button color="#fa7d00" title="Sign Out" onPress={() => firebase.auth().signOut()} />
          </View> */}

          {/* View below the sign out and logo */}


          <View style={styles.newproject}>
          <View style={{ flex: 1,flexDirection: 'row', justifyContent: "space-between", 
        height: 500}}>
          <View style={{flex: 1}}>
            <Text>Title:</Text>
            <TextInput placeholder="Venue Name" 
              value={this.state.currentNote}
              onChangeText={(text) => this.setState(prevState => ({
                currentNote: prevState.currentNote = text
              }))}
            />
          </View>
          <View style={{flex: 1}}>
            <Button
                onPress={() =>
                addProject(
                  {
                    venueName: this.state.currentNote
                  }
                )
              }>
              Add Project
              </Button>
          </View>

          </View>

            {/* <Button title="Edit" onPress={() => this.props.navigation.navigate('ScreenTwo')}/> */}
          </View>

          <FlatList
          data={this.state.notesList}
          ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ListItem
                containerStyle={styles.listItem}
                title={item.venueName}
                
              
                onPress={() => {
                  this.setState(prevState => ({ currentIndex: prevState.currentIndex = index }))
                  this.props.navigation.navigate('ScreenTwo', { note: item })
                }
                }

              />
            );
          }
          }
        />

        </View>



    );
  }
}

const styles = StyleSheet.create({

  wrapper:{
    flex: 1,
  },
  topscreen: {
    flex: .5,
    alignItems: 'flex-end',
    paddingRight: 30,
    justifyContent: 'center',
    backgroundColor: "black",
    height: 70,
    marginBottom: 50,
  },
  input: {
    flex: .3,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#777',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'

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
  text:{
    color: "white"
  }
});

// export default ScreenOne;
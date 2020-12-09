import React from 'react';
import { StyleSheet, View, Image, Text, ImageBackground, TextInput,
} from 'react-native';
import { Button, List } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';
import database from '../database';
import {addProject, getNotes} from '../database';
import { Divider } from 'react-native-elements';
import CreateNew from '../components/CreateCard';
import Header from '../components/Header';
import DialogForm from '../components/DialogForm';
import { Appbar } from 'react-native-paper';



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
    
  }

  onNoteAdded = (note) => {
    this.setState(prevState => ({
      notesList: [...prevState.notesList, note]
    }));
    this.props.navigation.popToTop();
  }

  onNoteDeleted = () => {
    var  newNoteList = [...this.state.notesList];
    newNoteList.splice(this.state.currentIndex, 1);

    this.setState(prevState => ({
      notesList: prevState.notesList = newNoteList
    }));

    this.props.navigation.popToTop();
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
          {/* <View style={styles.newproject}>
          <View style={{ flex: 1,flexDirection: 'row', justifyContent: "space-between"}}> */}
          {/* <View style={{flex: 1}}>
            <Text>Title:</Text>
            <TextInput placeholder="Venue Name" 
              value={this.state.currentNote}
              onChangeText={(text) => this.setState(prevState => ({
                currentNote: prevState.currentNote = text
              }))}
            />
          </View>
          <View style={{flex: 1, paddingBottom: 10}}>
            <Button
                onPress={() =>
                addProject(
                  {
                    venueName: this.state.currentNote
                  },
                  this.onNoteAdded()
                )
              }>
              Add Project
              </Button>
          </View> */}

          <View style={{flex: 1}}>
            <FlatList
            // style={{}} Add Styling here for FlatList
            data={this.state.notesList}
            ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <List.Item
                  title={item.venueName}
                  onPress={() => {
                    this.setState(prevState => ({ currentIndex: prevState.currentIndex = index }))
                    this.props.navigation.navigate('ScreenTwo', { note: item, noteDeletedCallback: this.onNoteDeleted })
                  }
                  }

                />
              );
            }
            }
          />
          </View>
          <View>
            <Appbar.Action icon="plus" onPress={() => {this.props.navigation.navigate('EditScreen', this.onNoteAdded)}} />
          </View>
        </View>



    );
  }
}

const styles = StyleSheet.create({

  wrapper:{
    flex: 1,
  },
  newproject: {
    flex: .09,
    flexDirection: "column",
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    color: "white"
  }
});


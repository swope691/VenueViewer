import React from 'react';
import { Appbar, TextInput} from 'react-native-paper';
import NewSwitch from '../components/Switch'
import { View, StyleSheet, style, Text, CheckBox } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import NoteForm from '../components/NoteForm'

export default class EditScreen extends React.Component {

  // static navigationOptions = ({navigation}) =>{
  //   return{
  //     title: navigation.getParam('note') ? 'Edit Note' : 'New Note'
  //   }
  // };
  state ={
    note: {
      venueName: null
    }
  }

  setVenueName = (text) => {
    this.setState(prevState => ({
      venueName: prevState.venueName = text
    }))
  }

  componentDidMount(){
    // const currentNote = this.props.navigation.getParam('note');

    // if(currentNote){
    //   this.setState(prevState => ({
    //     note: prevState.note = currentNote
    //   }))
    // }
  }

  onNoteUpdated = (note) =>{
    console.log(note);
    this.props.navigation.popToTop();
  }

  


  render() {
    
    // const note = this.props.navigation.getParam('note');
    return (
      
      <View style={{flex: 1}}>
        <Appbar.Header>
        <Appbar.BackAction onPress={() => {this.props.navigation.navigate('ScreenOne')}} />
        <Appbar.Content title="New Project"/>
        </Appbar.Header>
        <View style={styles.content}>


        {/* <NewSwitch></NewSwitch> */}
        <NoteForm
        setVenueName ={this.setVenueName}
        onNoteAdded={this.props.navigation.state.params}
        ></NoteForm> 
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 20,
  },
  textInput:{
    marginTop: 30
  }
});
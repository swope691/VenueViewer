import React from 'react';
import { Appbar, TextInput} from 'react-native-paper';
import NewSwitch from '../components/Switch'
import { View, StyleSheet, style, Text, CheckBox } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import NoteForm from '../components/NoteForm';

export default class EditScreen extends React.Component {

  // static navigationOptions = ({navigation}) =>{
  //   return{
  //     title: navigation.getParam('note') ? 'Edit Note' : 'New Project'
  //   }
  // };
  state ={
    note: {
      venueName: '',
      management: '',
      venueInfo: '',
      stagePower: '',
      houseLights: '',
      stageLights:'',
      mics: '',
      dementions: ''
    },

  }

  



  componentDidMount(){
    const currentNote = this.props.navigation.getParam('note');
    console.log(currentNote);
    if(currentNote){
      this.setState(prevState => ({
        note: prevState.note = currentNote
      }))
    }
  }

  onNoteUpdated = (note) =>{
    console.log(note);
    // this.props.navigation.pop();
    this.props.navigation.navigate('ScreenOne');
  }

  


  render() {
    
    const title = this.props.navigation.getParam('note') ? 'Edit Note' : 'New Note';
    return (
      
      <View style={{flex: 1}}>
          <Appbar.Header>
          <Appbar.BackAction onPress={() => {this.props.navigation.navigate('ScreenOne')}} />
          <Appbar.Content title={title}/>
          {/* <Appbar.Action icon="content-save-outline" onPress={() => props.handleSubmit()} /> */}
          </Appbar.Header>


        <View style={styles.content}>
        {/* <NewSwitch></NewSwitch> */}
          <NoteForm
          onNoteAdded={this.props.navigation.state.params}
          note={this.state.note}
          onNoteUpdated={this.onNoteUpdated}
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
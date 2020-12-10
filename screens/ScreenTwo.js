import React from 'react';
import { View, StyleSheet, style, Text, Alert } from 'react-native';
import { Appbar } from 'react-native-paper';
import { deleteNote } from '../database';

export default class ScreenTwo extends React.Component {

  render() {
    const note = this.props.navigation.getParam('note');
    const onNoteDeleted = this.props.navigation.getParam('noteDeletedCallback');
    console.log(note.venueName)
    return (
      
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {this.props.navigation.navigate('ScreenOne')}} />
          <Appbar.Content style={styles.title} title={note.venueName}/>
          <Appbar.Action icon="square-edit-outline" onPress={() => {this.props.navigation.navigate('EditScreen',{note: note})}} />
          <Appbar.Action 
            icon="trash-can"
            onPress={() =>
              Alert.alert(
                'Delete: ' + `${note.venueName}`,
                'Cannot be undone',
                [
                  { text: 'Cancel'},
                  { text: 'OK', onPress: () => { deleteNote(note, onNoteDeleted)}}
                ],
                {cancelable: false },
              )  
            }

          />
        </Appbar.Header>
        <View style={styles.content}>
          <Text style={{fontSize: 20}}>{note.venueName}</Text>
          <Text style={{fontSize: 20}}>{note.management}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content:{
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  title:{
    fontSize: 30,
  }
});
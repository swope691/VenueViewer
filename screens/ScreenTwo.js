import React from 'react';
import { View, StyleSheet, style, Text, Alert } from 'react-native';
import { Appbar } from 'react-native-paper';
import { deleteNote } from '../database';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';


export default class ScreenTwo extends React.Component {



  render() {
    const note = this.props.navigation.getParam('note');
    async function execute() {
      const html = `<body> <h1 style = "text-align: center; font-size: 26px"> Venue Viewer   </h1>
      \n<p style = "font-weight: bold; font-size: 18px">${note.venueName}</p>
      \n<p style = "font-size: 14px">${note.venueAddress}</p> 
      \n\n<h1 style = "font-size: 18px"> Management  Contact Information: </h1> \n 
      <p style = "font-size: 14px">${note.manager1}</p> \n 
      <p style = "font-size: 14px">${note.manager2}</p> \n
      <p style = "font-size: 14px">${note.manager3}</p> \n
      <p style = "font-size: 14px">${note.manager4}</p> \n 
      <p style = "font-size: 14px">${note.manager5}</p> \n\n 
      <h1 style = "font-size: 18px"> Venue Information: </h1> <p style = "font-size: 14px"> ${note.venueInfo} </p>
      \n\n <h1 style = "font-size: 18px"> Stage: </h1>\n<p style = "font-size: 14px"> ${note.stage} </p> \n 
        <h1 style = "font-size: 18px"> Power: </h1> \n<p style = "font-size: 14px">${note.stagePower}</p>\n
        <h1 style = "font-size: 18px"> FOH Snake Run: </h1> <p style = "font-size: 14px">${note.snakeRun}</p>\n 
        <h1 style = "font-size: 18px"> Rigging Information: </h1>\n <p style = "font-size: 14px">${note.riggingInfo}</p> 
  
        <h1 style = "page-break-before: always; text-align: center; font-size: 26px"> Lighting Information: </h1>\n\n 
        <p style = "font-size: 14px">${note.lighting}</p>\n\n

  
        <h1 style = "page-break-before: always; text-align: center; font-size: 26px"> Audio Information: </h1>
        <p style = "font-size: 14px">${note.audio}</p>\n\n 
  
        <h1 style = "page-break-before: always; text-align: center; font-size: 26px"> Stage: </h1>\n\n
        <h1 style = "font-size: 18px"> Backstage Rooms: </h1>\n <p style = "font-size: 14px">${note.backstageInfo}</p>\n\n
        <h1 style = "font-size: 18px"> Merchandise Area: </h1>\n <p style = "font-size: 14px">${note.merchInfo}</p>\n\n
        <h1 style = "font-size: 18px"> ${note.venueName} </h1>\n <p style = "font-size: 14px">${note.tourName}</p> \n
        <p style = "font-size: 14px">${note.venueAddress}</p> \n
        <h1 style = "font-size: 18px"> Parking Instructions: </h1>\n
        <p style = "font-size: 14px">${note.parkingInfo}</p>

        <h1 style = "page-break-before: always; text-align: center; font-size: 26px"> Extra Notes </h1>\n\n
          <p style = "font-size: 14px"> ${note.extraNote1}</p>\n
          <p style = "font-size: 14px"> ${note.extraNote2}</p>
  
        <h1 style = "page-break-before: always; text-align: center; font-size: 26px"> Add Photos: </h1>\n\n
  
        </body> `;
        const { uri } = await Print.printToFileAsync({ html });
        Sharing.shareAsync(uri);
      }
    
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
          <Appbar.Action icon="share-variant" onPress={() => execute()} />
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
import React from 'react';
import { View, StyleSheet, style, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

export default class ScreenTwo extends React.Component {

  render() {
    const note = this.props.navigation.getParam('note');
    
    return (
      
      <View style={styles.container}>
        
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {this.props.navigation.navigate('ScreenOne')}} />
          <Appbar.Content style={styles.title} title={note.venueName}/>
          <Appbar.Action icon="square-edit-outline" onPress={() => {this.props.navigation.navigate('EditScreen',{note:note})}} />
        </Appbar.Header>
        <View style={styles.content}>
          <Text style={{fontSize: 20}}>{note.venueName}</Text>
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
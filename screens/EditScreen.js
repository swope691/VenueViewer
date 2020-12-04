import React from 'react';
import { Appbar } from 'react-native-paper';
import NewSwitch from '../components/Switch'
import { View, StyleSheet, style, Text } from 'react-native';
import NewTextInput from '../components/TextInput'

export default class EditScreen extends React.Component {

  render() {
    
    const note = this.props.navigation.getParam('note');
    return (
      
      <View style={styles.container}>
        <Appbar.Header>
        <Appbar.BackAction onPress={() => {this.props.navigation.navigate('ScreenOne')}} />
        <Appbar.Content title={note.venueName}/>
        </Appbar.Header>
        <View style={styles.content}>
        <NewSwitch></NewSwitch>
        <NewTextInput></NewTextInput>

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
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 20,
  },
});
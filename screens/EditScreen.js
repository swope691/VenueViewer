import React from 'react';
import { Appbar } from 'react-native-paper';

import { View, StyleSheet, style, Text } from 'react-native';

export default class EditScreen extends React.Component {

  render() {
    
    const note = this.props.navigation.getParam('note');

    return (
      
      <View style={styles.container}>
        <Appbar.Header>
        <Appbar.BackAction onPress={() => {this.props.navigation.navigate('ScreenOne')}} />
        <Appbar.Content title={note.venueName}/>
        </Appbar.Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
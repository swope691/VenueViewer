import React from 'react';
import { Appbar, TextInput} from 'react-native-paper';
import NewSwitch from '../components/Switch'
import { View, StyleSheet, style, Text, CheckBox } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default class EditScreen extends React.Component {

    render() {
    
    const note = this.props.navigation.getParam('note');
    return (
      
      <View style={{flex: 1}}>
        <Appbar.Header>
        <Appbar.BackAction onPress={() => {this.props.navigation.navigate('ScreenOne')}} />
        <Appbar.Content title={note.venueName}/>
        </Appbar.Header>
        <View style={styles.content}>

          <FlatList
            data={[
              {
                label: 'management'
              },
              {
                label: 'venue info'
              },
              {
                label: 'stage power'
              },
              {
                label: 'house lights'
              },
              {
                label: 'stage lights'
              },
              {
                label: 'new lights'
              },
              {
                label: 'mics'
              }
            ]}
            renderItem={({item}) => <TextInput style={styles.textInput} key={item.label} label={item.label}></TextInput>}
          />
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
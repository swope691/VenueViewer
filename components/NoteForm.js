import React, {Component } from 'react';
import {
    StyleSheet,
    View, 
    Text, FlatList, Button
} from 'react-native';
import {withFormik} from 'formik';
import * as yup from 'yup';
import {addProject, updateNote} from '../database';
import {TextInput} from 'react-native-paper';

const NoteForm = (props) => {
    // console.log(props);
    return(
        <View>

                {/* <TextInput
                Mode='flat'
                value={props.values.venueName} 
                label = "Venue Name"
                onChangeText={text => { props.setFieldValue('venueName', text)}}
                >
                </TextInput>
                    <Text> {props.errors.venueName} </Text> */}

            <FlatList
            data={[
              {
                value: props.values.venueName,
                label: 'venue name',
                change: 'venueName'
              },
              {
                value: props.values.management,
                label: 'management',
                change: 'management'

              },
              {
                value: props.values.venueInfo,
                label: 'venue info',
                change: 'venueInfo'

              },
              {
                value: props.values.stagePower,
                label: 'stage power',
                change: 'stagePower'
              },
              {
                value: props.values.stageLights,
                label: 'stage lights',
                change: 'stageLights'

              },
              {
                value: props.values.mics,
                label: 'mics',
                change: 'mics'
              },
              {
                value: props.values.dementions,
                label: 'dementions',
                change: 'management'
              }
            ]}
            renderItem={({item}) => 
            <TextInput 
              mode="flat" 
              style={styles.textInput} 
              key={item.label} 
              label={item.label} 
              value={item.value} 
              onChangeText={text => { props.setFieldValue(item.change, text)}}
            ></TextInput>}
          /> 
          <Button 
                title = 'Submit'
                onPress={() => props.handleSubmit()}
          ></Button>           

        </View>
    )
}

// Styles
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

export default withFormik({

    mapPropsToValues: ({note}) => ({
        venueName: note.venueName,
        management: note.management,
        venueInfo: note.venueInfo,
        stagePower: note.stagePower,
        houseLights: note.houseLights,
        stageLights: note.stageLights,
        mics: note.mics,
        dementions: note.dementions
    }),
    enableReinitialize: true,
    validationSchema: (props) => yup.object().shape({
        venueName: yup.string().max(30).required(),
        management: yup.string().max(100),
        venueInfo: yup.string().max(20),
        houseLights: yup.string().max(20),
        stagePower: yup.string().max(20),
        houseLights: yup.string().max(20),
        mics: yup.string().max(20),
        dementions: yup.string().max(20)
    }),
    handleSubmit: (values, { props }) => {
        console.log(values);
        console.log(props);
        if(props.note.id){
          values.id = props.note.id;
          values.createdAt = props.note.createdAt;
          updateNote(values, props.onNoteUpdated)
        }else{
          addProject(values, props.onNoteAdded)
        }
    }
})(NoteForm);
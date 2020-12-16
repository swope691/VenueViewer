import React, {Component } from 'react';
import {
    StyleSheet,
    KeyboardAvoidingView, 
    Text, FlatList, Button
} from 'react-native';
import {withFormik} from 'formik';
import * as yup from 'yup';
import {addProject, updateNote} from '../database';
import {TextInput} from 'react-native-paper';

const NoteForm = (props) => {
    // console.log(props);
    return(
          <KeyboardAvoidingView behavior="">
              <FlatList
              data={[
                {
                  value: props.values.venueName,
                  label: 'Venue Name',
                  change: 'venueName'
                },
                {
                  value: props.values.tourName,
                  label: 'Tour Name',
                  change: 'tourName'
                },
                {
                  value: props.values.venueAddress,
                  label: 'Address',
                  change: 'venueAddress'
                },
                {
                  value: props.values.venueInfo,
                  label: 'venue info',
                  change: 'venueInfo'

                },
                {
                  value: props.values.merchInfo,
                  label: 'Merchandise Info',
                  change: 'merchInfo'
                },
                {
                  value: props.values.backstageInfo,
                  label: 'Backstage Information',
                  change: 'backstageInfo'
                },
                {
                  value: props.values.manager1,
                  label: 'Manager 1',
                  change: 'manager1'
                },
                {
                  value: props.values.manager2,
                  label: 'Manager 2',
                  change: 'manager2'
                },
                {
                  value: props.values.manager3,
                  label: 'Manager 3',
                  change: 'manager3'
                },
                {
                  value: props.values.manager4,
                  label: 'Manager 4',
                  change: 'manager4'
                },
                {
                  value: props.values.manager5,
                  label: 'Manager 5',
                  change: 'manager5'
                },
                {
                  value: props.values.stage,
                  label: 'Stage',
                  change: 'stage'
                },
                {
                  value: props.values.stagePower,
                  label: 'stage power',
                  change: 'stagePower'
                },
                {
                  value: props.values.lighting,
                  label: 'Lighting',
                  change: 'lighting'

                },
                {
                  value: props.values.audio,
                  label: 'Audio',
                  change: 'audio'
                },
                {
                  value: props.values.snakeRun,
                  label: "Snake Run",
                  change: 'snakeRun'
                },
                {
                  value: props.values.riggingInfo,
                  label: 'Rigging Info',
                  change: 'riggingInfo'
                },
                {
                  value: props.values.parkingInfo,
                  label: 'Parking Information',
                  change: 'parkingInfo'
                },
                {
                  value: props.values.extraNote1,
                  label: 'Extra Note',
                  change: 'extraNote1'
                },
                {
                  value: props.values.extraNote2,
                  label: 'Extra Note',
                  change: 'extraNote2'
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

        </KeyboardAvoidingView>
        
    )
}

// Styles
const styles = StyleSheet.create({

  textInput:{
    marginBottom: 30
  }
});

export default withFormik({

    mapPropsToValues: ({note}) => ({
        venueName: note.venueName,
        tourName: note.tourName,
        venueAddress: note.venueAddress,
        manager1: note.manager1,
        manager2: note.manager2,
        manager3:note.manager3,
        manager4:note.manager4,
        manager5:note.manager5,
        venueInfo: note.venueInfo,
        backstageInfo: note.backstageInfo,
        merchInfo: note.merchInfo,
        stagePower: note.stagePower,
        lighting: note.lighting,
        audio: note.audio,
        stage: note.stage,
        snakeRun: note.snakeRun,
        riggingInfo: note.riggingInfo,
        parkingInfo: note.parkingInfo,
        extraNote1: note.extraNote1,
        extraNote2: note.extraNote2
    }),
    enableReinitialize: true,
    validationSchema: (props) => yup.object().shape({
        venueName: yup.string().max(30).required(),
        tourName: yup.string().max(50),
        venueAddress: yup.string().max(100),
        manager1: yup.string().max(150),
        manager2: yup.string().max(150),
        manager3: yup.string().max(150),
        manager4: yup.string().max(150),
        manager5: yup.string().max(150),
        venueInfo: yup.string().max(1000),
        backstageInfo: yup.string().max(1000),
        merchInfo: yup.string().max(1000),
        lighting: yup.string().max(500),
        stagePower: yup.string().max(20),
        audio: yup.string().max(1000),
        stage: yup.string().max(1000),
        snakeRun: yup.string().max(100),
        riggingInfo: yup.string().max(1000),
        parkingInfo: yup.string().max(1000),
        extraNote1: yup.string().max(500),
        extraNote2: yup.string().max(500)
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
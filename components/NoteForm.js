import React, {Component } from 'react';
import {
    StyleSheet,
    View, 
    TextInput,
    Button,
    Text, FlatList
} from 'react-native';
import {withFormik} from 'formik';
import * as yup from 'yup';
import {addProject, updateNote} from '../database';

const NoteForm = (props) => {
    // console.log(props);
    return(
        <View>
            <View>
                <TextInput
                value={props.values.venueName} 
                label = "Venue Name"
                onChangeText={text => { props.setFieldValue('venueName', text)}}
                ></TextInput>
                    <Text> {props.errors.venueName} </Text>
                <Button 
                title = 'Submit'
                onPress={() => props.handleSubmit()}
                ></Button>
            {/* <View>
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
        </View> */}
                

            </View>
        </View>
    )
}

export default withFormik({
    mapPropsToValues: ({note}) => ({
        venueName: note.venueName 
    }),
    enableReinitialize: true,
    validationSchema: (props) => yup.object().shape({
        venueName: yup.string().max(30).required()
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
import React, {Component } from 'react';
import {
    StyleSheet,
    View, 
    TextInput,
    Button,
    Text
} from 'react-native';
import {withFormik} from 'formik';
import * as yup from 'yup';
import {addProject} from '../database';

const NoteForm = (props) => {
    console.log(props);
    return(
        <View>
            <View>
                <TextInput 
                label = "Venue Name"
                onChangeText={text => { props.setFieldValue('venueName', text)}}
                ></TextInput>
                    <Text> {props.errors.venueName} </Text>
                <Button 
                title = 'Submit'
                onPress={() => props.handleSubmit()}
                >
                          {/* <FlatList
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
                
                </Button>
            </View>
        </View>
    )
}

export default withFormik({
    mapPropsToValues: () => ({
        venueName: '' 
    }),
    validationSchema: (props) => yup.object().shape({
        venueName: yup.string().max(30).required()
    }),
    handleSubmit: (values, { props }) => {
        console.log(values);
        console.log(props);

        addProject(values, props.onNoteAdded)
    }
})(NoteForm);
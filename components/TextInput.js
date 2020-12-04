import * as React from 'react';
import View from 'react-native';
import { TextInput } from 'react-native-paper';

const NewTextInput = () => {
  const [text, setText] = React.useState('');
  const TextInputLabel = [
    'management',
    'venue info',
    'stage power',
    'house lights',
    'mics'
  ]
  return(
        <TextInput
        label={TextInputLabel.map(block => Components(block))}
        onChangeText={text => setText(text)}
      /> 
  )
};

export default NewTextInput;
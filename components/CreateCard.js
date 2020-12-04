import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CreateNew = () => (
  <Card>
    <Card.Cover source={require('../assets/mic.jpg')} />
    <Card.Actions>
    </Card.Actions>
  </Card>
);

export default CreateNew;
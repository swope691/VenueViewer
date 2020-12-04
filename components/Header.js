import * as React from 'react';
import { Appbar } from 'react-native-paper';
import styles from 'react-native';
import firebase from 'firebase';

const Header = () => {

  return (
    <Appbar.Header dark={true} style={styles.container} >
      <Appbar.Content title="Headline Productions" subtitle="Home" />
      <Appbar.Action icon="logout" onPress={() => firebase.auth().signOut()} />
    </Appbar.Header>
  );
};

export default Header;
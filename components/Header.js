import * as React from 'react';
import { Appbar } from 'react-native-paper';
import styles from 'react-native';
import firebase from 'firebase';

const Header = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header dark={true} style={styles.container} >
      <Appbar.Content title="Headline Productions" subtitle="Home" />
      <Appbar.Action icon="logout" onPress={() => firebase.auth().signOut()} />
    </Appbar.Header>
  );
};

export default Header;
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import styles from 'react-native';

const Header = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header statusBarHeight={40} dark={true} style={styles.container} >
      <Appbar.Content title="Headline Productions" subtitle="Home" />
    </Appbar.Header>
  );
};

export default Header;
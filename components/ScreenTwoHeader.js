import * as React from 'react';
import { Appbar } from 'react-native-paper';

const ScreenTwoHeader = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
        <Appbar.BackAction
          onPress={_goBack}
        />
        <Appbar.Content
          title={this.note.venuName}
          subtitle="Subtitle"
        />
      </Appbar.Header>
  );
  
}


export default ScreenTwoHeader;
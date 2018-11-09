import React from 'react';
import { Text, View } from 'react-native';

import { TabNavigation } from './config/routes';

export default class App extends React.Component {
  render() {
    return(
      <TabNavigation />
    );
  }
}

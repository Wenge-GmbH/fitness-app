import React from 'react';
import { Text, View } from 'react-native';

import { StartNavigation } from './router/index';

export default class App extends React.Component {
  render() {
    return(
      <StartNavigation />
    );
  }
}

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {LinearGradient} from 'expo';

import { Timer } from './Timer';

export default class TimeComp extends React.Component {
  render() {
    return(
      <LinearGradient colors={['#bf0046', '#bf00a5']} style={styles.timer}>
        <View style={styles.innerTimer}>
          {
            this.props.time === 'Start' ? <Text style={styles.timeText} >0.0</Text> : <Timer start={Date.now()} />
          }
          <Text style={styles.timeTextSmall}>now</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  timer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 270,
    height: 270,
    borderRadius: 145,
  },
  innerTimer: {
    flex: 0,
    width: 260,
    height: 260,
    backgroundColor: '#1c1c1c',
    borderRadius: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeTextSmall: {
    fontSize: 22,
    color: '#bf00a5',
  },
  timeText: {
    fontSize: 80,
    color: 'white',
  },
});

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {LinearGradient} from 'expo';

export default class TimeComp extends React.Component {
  render() {
    return(
      <LinearGradient colors={['#bf0046', '#bf00a5']} style={styles.timer}>
        <View style={styles.innerTimer}>
          <Timer start={Date.now()} />
          <Text style={styles.timeTextSmall}>this Week</Text>
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
    width: 250,
    height: 250,
    backgroundColor: '#2b2b2b',
    borderRadius: 125,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 80,
    color: 'white',
  },
  timeTextSmall: {
    fontSize: 22,
    color: '#bf00a5',
  }
});

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { elapsed: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 50);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState({elapsed: new Date() - this.props.start});
  }

  render() {
    var elapsed = Math.round(this.state.elapsed / 100);
    var seconds = (elapsed / 10).toFixed(1);

    return(
      <Text style={styles.timeText} >{seconds}h</Text>
    );
  }
}

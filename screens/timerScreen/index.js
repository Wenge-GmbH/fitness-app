import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {LinearGradient} from 'expo';

import TimeComp from './components/StopWatch/TimeComp';
import MyButton from '../../components/button';

export default class TimerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Start',
    }
  }

  _startTimer = () => {
    console.log('clicked');
    this.setState({
      title: this.state.title === 'Start' ? 'Stop' : 'Start',
    })
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container} >

          <View style={styles.timeContainer}>
            <TimeComp time={this.state.title} />
          </View>

          <MyButton press={this._startTimer} title={this.state.title}/>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
  h1: {
    fontSize: 60,
    textAlign: 'center',
    color: 'white',
  },
  bgCard: {
    height: 200,
    flex: 0,
  },
  timeContainer: {
    flex: 0,
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#1c1c1c',
  },
  timer: {
    flex: 0,
    width: 270,
    height: 270,
    backgroundColor: 'white',
    borderRadius: 145,
  },
  padding: {
    paddingHorizontal: 40,
    paddingTop: 70,
  },
  p: {
    fontSize: 16,
    color: 'white',
  },
  bottomBorder: {
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 1,
    marginBottom: 10,
  }
});

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class Timer extends React.Component {
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
      <Text style={styles.timeText} >{seconds}</Text>
    );
  }
}

const styles = StyleSheet.create({
  timeText: {
    fontSize: 80,
    color: 'white',
  },
});

import React from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';

import { LinearGradient } from 'expo';

export default class MyButton extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={this.props.press}>
          <LinearGradient colors={['#bf0046', '#bf00a5']} style={styles.button}>
            <View style={styles.buttonInner}>
              <Text style={styles.text}>{this.props.title}</Text>
            </View>
          </LinearGradient>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 260,
    height: 90,
    borderRadius: 130,
  },
  buttonInner: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 80,
    borderRadius: 125,
    backgroundColor: '#1c1c1c',
  },
  text: {
    textAlign: 'center',
    color: '#ebebeb',
    fontSize: 20,
  }
})

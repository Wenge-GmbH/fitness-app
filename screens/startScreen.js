import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo';

export default class StartScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  _animateGradient = () => {
    return;
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <LinearGradient colors={['#bf0046', '#bf00a5']} style={styles.container} >
        <View>
          <Text style={styles.h1}>YET</Text>
          <Text style={styles.h1}>ANOTHER</Text>
          <Text style={styles.h1}>APP</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigate('Home')} underlayColor="transparent" >
            <View style={styles.button} >
              <Text style={styles.buttonText}>
                START
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 60,
    textAlign: 'center',
    color: 'white',
  },
  button: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 240,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonContainer: {
    marginTop: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  }
});

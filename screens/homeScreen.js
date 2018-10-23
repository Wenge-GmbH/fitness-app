import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {LinearGradient} from 'expo';

import TimeComp from '../components/TimeComp';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container} >
        <View style={styles.bgCard}>
          <View style={styles.timeContainer}>
            <TimeComp />
          </View>
          
          <View style={styles.padding}>
            <View style={styles.bottomBorder}>
              <Text style={styles.p}>Hello</Text>
            </View>
            <View style={styles.bottomBorder}>
              <Text style={styles.p}>Hello</Text>
            </View>
            <View style={styles.bottomBorder}>
              <Text style={styles.p}>Hello</Text>
            </View>
            <View style={styles.bottomBorder}>
              <Text style={styles.p}>Hello</Text>
            </View>
            <View style={styles.bottomBorder}>
              <Text style={styles.p}>Hello</Text>
            </View>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2b2b',
  },
  h1: {
    fontSize: 60,
    textAlign: 'center',
    color: 'white',
  },
  bgCard: {
    height: 400,
    flex: 0,
  },
  timeContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
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
  },
  p: {
    fontSize: 16,
    color: 'white',
  },
  bottomBorder: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  }

});

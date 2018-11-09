import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class PlanScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Opp!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

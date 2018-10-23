import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.view}>
        <View>
          <Text style={styles.h1}>Overview</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.col, styles.card]}>
            <Text>Trainingsplan</Text>
          </View>
          <View style={[styles.col, styles.card]}>
            <Text>Trainingsplan</Text>
          </View>
        </View>
        <View>
          <Button title="back" onPress={() => navigate('Start')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    padding: 10,
    backgroundColor: '#fff',
  },
  p: {
    fontSize: 12,
  },

  view: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#fff'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  col: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    minWidth: 100,
    minHeight: 100,
    maxHeight: 150,
    margin: 10,
  },
  card: {
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 10.22,
    elevation: 2,
    backgroundColor: '#fff',
  }
});

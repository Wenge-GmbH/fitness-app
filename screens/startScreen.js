import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class StartScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View>
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container} >
          <View>
            <Text style={styles.h1}>YET</Text>
            <Text style={styles.h1}>ANOTHER</Text>
            <Text style={styles.h1}>APP</Text>
          </View>
          <View>
            <Button title="start" onPress={() => navigate('Home')}/>
          </View>
        </LinearGradient>
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
  h1: {
    fontSize: 60,
    textAlign: 'center',
  }
});

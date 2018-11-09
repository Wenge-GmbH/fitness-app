import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default class Icon extends React.Component {
  render(props) {
    console.log(this);
    return (
      <View>
        <Image style={styles.image} source={this.props.name} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
});

import React, {Component} from 'react';
import { Text, View } from 'react-native';
import styles from './src/styles/index';
import Nav from './src/components/nav/Nav';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Nav />
        <Text>This is the Nalda app</Text>
      </View>
    );
  }
}

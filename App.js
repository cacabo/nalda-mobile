import React, {Component} from 'react';
import { Text, View } from 'react-native';
import styles from './src/styles/index';
import Nav from './src/components/nav/Nav';
import Home from './src/components/home/Home';

export default class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Nav />
        <View style={styles.container}>
          <Home />
        </View>
      </View>
    );
  }
}

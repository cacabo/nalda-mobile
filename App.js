import React from 'react';
import { Text, View } from 'react-native';
import styles from './src/styles/index';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Nalda app</Text>
      </View>
    );
  }
}

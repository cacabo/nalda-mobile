import React from 'react';
import { View } from 'react-native';

// Import styles
import styles from './src/styles/index';

// Import components
import Navigation from './src/components/Navigation';

export default () => (
  <View style={styles.app}>
    <Navigation />
  </View>
);

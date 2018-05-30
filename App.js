import React from 'react';
import { View } from 'react-native';

// Import styles
import appStyles from './src/styles/appStyles';

// Import components
import Navigation from './src/components/Navigation';

export default () => (
  <View style={appStyles.app}>
    <Navigation />
  </View>
);

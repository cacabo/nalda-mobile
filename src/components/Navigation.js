import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Image } from 'react-native';
import Home from './home/Home';
import styles from '../styles/navigation';

// Import logo image
const logo = require('../images/logo_blue.png');

export default () => {
  const Navigator = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: () => ({
        headerTitle: (
          <View>
            <Image
              style={styles.logo}
              source={logo}
            />
          </View>
        ),
        headerStyle: styles.nav,
      }),
    },
  });
  return (<Navigator />);
};

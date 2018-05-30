import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import Home from './home/Home';
import styles from '../styles/navigation';

const logo = require('../images/logo_blue.png');

export default () => {
  const Navigator = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: () => ({
        headerTitle: (
          <Image
            style={styles.logo}
            source={logo}
          />
        ),
        headerStyle: styles.nav,
      }),
    },
  });
  return (<Navigator />);
};

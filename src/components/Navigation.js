import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import Home from './home/Home';
import navigationStyles from '../styles/navigationStyles';

const logo = require('../images/logo_blue.png');

export default () => {
  const Navigator = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: () => ({
        headerTitle: (
          <Image
            style={navigationStyles.logo}
            source={logo}
          />
        ),
        headerStyle: navigationStyles.nav,
      }),
    },
  });
  return (<Navigator />);
};

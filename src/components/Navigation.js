import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Image } from 'react-native';
import styles from '../styles/navigation';

// Import components
import Home from './home/Home';
import Listing from './listings/Listing';
import ListingsCategory from './listings/ListingsCategory';

// Import logo image
const logo = require('../images/logo_blue.png');

const navigationOptions = () => ({
  headerTitle: (
    <View>
      <Image
        style={styles.logo}
        source={logo}
      />
    </View>
  ),
  headerStyle: styles.nav,
  cardStyle: styles.card,
});

const page = screen => ({
  screen,
  navigationOptions,
});

const Navigator = createStackNavigator({
  Home: page(Home),
  Listing: page(Listing),
  ListingsCategory: page(ListingsCategory),
});

export default Navigator;

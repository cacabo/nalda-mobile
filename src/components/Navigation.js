import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Image } from 'react-native';

import styles from '../styles/navigation';
import { white } from '../styles/colors';

import Home from './home/Home';
import Listings from './listings/Listings';
import Listing from './listings/Listing';
import ListingsCategory from './listings/ListingsCategory';
import Articles from './articles/Articles';
import Article from './articles/Article';

const logo = require('../images/logo.png');

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
  headerTintColor: white, // Icon color
});

const page = screen => ({
  screen,
  navigationOptions,
});

const screens = {
  Home,
  Listing,
  ListingsCategory,
  Listings,
  Articles,
  Article,
};

const pages = {};

Object.keys(screens).forEach((key) => {
  pages[key] = page(screens[key]);
});

const Navigator = createStackNavigator(pages);

export default Navigator;

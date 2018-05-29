import React from 'react';
import { Image, View } from 'react-native';
import styles from '../../styles/index';

// Read in logo
const logo = require('../../images/logo_blue.png');

export default () => (
  <View style={styles.nav}>
    <Image
      style={styles.logo}
      source={logo}
    />
  </View>
);

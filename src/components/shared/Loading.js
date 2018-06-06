import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import appStyles from '../../styles/app';
import { blue } from '../../styles/colors';
import styles from '../../styles/shared/loading';

export default () => (
  <View style={appStyles.container}>
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={blue} />
    </View>
  </View>
);

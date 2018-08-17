import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from '../../styles/previews/preview';

export default () => (
  <TouchableOpacity style={styles.previewWrapper}>
    <Text>This is a video</Text>
  </TouchableOpacity>
);

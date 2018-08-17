import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

import styles from '../../styles/previews/preview';

export default () => (
  <TouchableHighlight style={styles.previewWrapper}>
    <Text>This is a video</Text>
  </TouchableHighlight>
);

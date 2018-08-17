import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../styles/articles/article';

const ImageComponent = ({ body }) => (
  <View style={styles.imageWrapper}>
    <Image
      style={styles.image}
      source={{ uri: body }}
    />
  </View>
);

ImageComponent.propTypes = {
  body: PropTypes.string.isRequired,
};

export default ImageComponent;

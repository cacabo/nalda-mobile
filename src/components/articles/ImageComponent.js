import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../styles/articles/article';

const ImageComponent = ({ body }) => (
  <Image
    style={styles.image}
    source={{ uri: body }}
  />
);

ImageComponent.propTypes = {
  body: PropTypes.string.isRequired,
};

export default ImageComponent;

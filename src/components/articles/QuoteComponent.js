import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import textStyles from '../../styles/shared/text';
import styles from '../../styles/articles/article';

const TextComponent = ({ body }) => (
  <View style={styles.quote}>
    <Text style={textStyles.quote}>{body}</Text>
  </View>
);

TextComponent.propTypes = {
  body: PropTypes.string.isRequired,
};

export default TextComponent;

import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import textStyles from '../../styles/shared/text';
import styles from '../../styles/articles/article';

const HeaderComponent = ({ body }) => (
  <View style={styles.header}>
    <Text style={textStyles.subtitle}>{body}</Text>
  </View>
);

HeaderComponent.propTypes = {
  body: PropTypes.string.isRequired,
};

export default HeaderComponent;

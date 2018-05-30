import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/home/homeComponent';

const HomeComponent = ({ component }) => (
  <View>
    <Text style={styles.title}>
      { component.title }
    </Text>
    <Text style={styles.subtitle}>
      { component.subtitle }
    </Text>
  </View>
);

HomeComponent.defaultProps = {
  component: {},
};

HomeComponent.propTypes = {
  component: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    contentType: PropTypes.string,
  }),
};

export default HomeComponent;

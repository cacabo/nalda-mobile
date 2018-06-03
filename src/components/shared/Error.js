import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from '../../styles/shared/error';

const ErrorMessage = ({ error }) => {
  if (error) {
    return (
      <View style={styles.error}>
        <Text style={styles.text}>
          {error}
        </Text>
      </View>
    );
  }

  return null;
};

ErrorMessage.defaultProps = {
  error: '',
};

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;

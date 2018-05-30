import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import appStyles from '../../styles/appStyles';

const ErrorMessage = ({ error }) => {
  if (error) {
    return (
      <View style={appStyles.error}>
        <Text>{error}</Text>
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

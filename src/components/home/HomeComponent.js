import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const HomeComponent = ({ component }) => (
  <View>
    <Text>
      { component.title }
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

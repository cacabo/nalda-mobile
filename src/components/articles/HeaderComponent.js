import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import textStyles from '../../styles/shared/text';

const HeaderComponent = ({ body }) => (
  <Text style={textStyles.title}>{body}</Text>
);

HeaderComponent.propTypes = {
  body: PropTypes.string.isRequired,
};

export default HeaderComponent;

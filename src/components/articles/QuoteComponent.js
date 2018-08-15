import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import textStyles from '../../styles/shared/text';

const TextComponent = ({ body }) => (
  <Text styles={textStyles.quote}>{body}</Text>
);

TextComponent.propTypes = {
  body: PropTypes.string.isRequired,
};

export default TextComponent;

import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import textStyles from '../../styles/shared/text';
import appStyles from '../../styles/app';

import Error from '../shared/Error';
import Author from '../shared/Author';

const Overview = ({
  article: {
    title,
    subtitle,
    createdAt,
    updatedAt,
  },
  author,
  error,
}) => (
  <View style={appStyles.container}>
    <Error error={error} />

    <Text style={textStyles.title}>
      {title}
    </Text>

    <Text style={textStyles.subtitle}>
      {subtitle}
    </Text>

    <Author
      author={author}
      createdAt={createdAt}
      updatedAt={updatedAt}
    />
  </View>
);

Overview.defaultProps = {
  error: '',
};

Overview.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    createdAt: PropTypes.number,
    updatedAt: PropTypes.number,
  }).isRequired,
  author: PropTypes.shape({

  }).isRequired,
  error: PropTypes.string,
};

export default Overview;

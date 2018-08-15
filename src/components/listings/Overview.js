import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import appStyles from '../../styles/app';
import styles from '../../styles/listings/listing';
import textStyles from '../../styles/shared/text';

import Error from '../shared/Error';
import Author from '../shared/Author';
import Categories from './Categories';

const Overview = ({
  listing: {
    title,
    createdAt,
    updatedAt,
    description,
    categories,
    naldaFavorite,
  },
  error,
  author,
}) => (
  <View style={appStyles.container}>
    <Error error={error} />

    <Text style={textStyles.title}>
      {title}
    </Text>

    <Author
      author={author}
      createdAt={createdAt}
      updatedAt={updatedAt}
    />

    <Categories categories={categories} />

    <Text style={styles.description}>
      {description}
    </Text>

    <View style={styles.naldaFavorite}>
      <Text style={textStyles.subtitle}>
        {"Nalda's favorite:"}
      </Text>
      <Text style={textStyles.body}>
        {naldaFavorite}
      </Text>
    </View>
  </View>
);

Overview.defaultProps = {
  error: '',
};

Overview.propTypes = {
  error: PropTypes.string,
  listing: PropTypes.shape({
    title: PropTypes.string,
    createdAt: PropTypes.number,
    updatedAt: PropTypes.number,
    description: PropTypes.string,
    categories: PropTypes.object,
    naldaFavorite: PropTypes.string,
  }).isRequired,
  author: PropTypes.object.isRequired,
};

export default Overview;

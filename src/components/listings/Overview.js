import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import appStyles from '../../styles/app';
import styles from '../../styles/listings/listing';
import textStyles from '../../styles/shared/text';

import Error from '../shared/Error';
import Author from '../shared/Author';
import Categories from './Categories';

const Overview = ({ listing, error, author }) => (
  <View style={appStyles.container}>
    <Error error={error} />

    <Text style={textStyles.title}>
      {listing.title}
    </Text>

    <Author
      author={author}
      createdAt={listing.createdAt}
      updatedAt={listing.updatedAt}
    />

    <Categories categories={listing.categories} />

    <Text style={styles.description}>
      {listing.description}
    </Text>

    <View style={styles.naldaFavorite}>
      <Text style={textStyles.subtitle}>
        {"Nalda's favorite:"}
      </Text>
      <Text style={textStyles.body}>
        {listing.naldaFavorite}
      </Text>
    </View>
  </View>
);

Overview.defaultProps = {
  error: '',
};

Overview.propTypes = {
  error: PropTypes.string,
  listing: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
};

export default Overview;

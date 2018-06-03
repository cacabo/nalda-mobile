import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/previews/preview';

// Import components
import Stars from '../listings/Stars';
import Categories from '../listings/Categories';

const PreviewListing = ({ listing }) => {
  if (!listing) return null;
  return (
    <View style={styles.preview}>
      <Image
        source={{ uri: listing.image }}
        resizeMode="cover"
        style={styles.image}
      />
      <Text style={styles.title}>
        {listing.title}
      </Text>
      <Stars rating={listing.rating} />
      <Categories categories={listing.categories} />
      <Text style={styles.subtitle}>
        {listing.description}
      </Text>
    </View>
  );
};

PreviewListing.propTypes = {
  listing: PropTypes.object.isRequired,
};

export default PreviewListing;

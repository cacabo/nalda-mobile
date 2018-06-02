import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/previews/preview';
import Stars from '../listings/Stars';

const PreviewListing = ({ listing }) => {
  if (!listing) return null;
  return (
    <View style={styles.preview}>
      <Image
        source={{ uri: listing.image }}
        resizeMode="cover"
        style={styles.image}
      />
      <Stars rating={listing.rating} />
      <Text style={styles.title}>
        {listing.title}
      </Text>
      <Text style={styles.subtitle}>
        {listing.description}
      </Text>
    </View>
  );
};

PreviewListing.defaultProps = {
  listing: {},
};

PreviewListing.propTypes = {
  listing: PropTypes.object,
};

export default PreviewListing;

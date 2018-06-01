import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/previews/preview';

const PreviewListing = ({ listing }) => {
  if (!listing) return null;
  return (
    <View style={styles.preview}>
      <Image
        source={{ uri: listing.image }}
        style={styles.image}
      />
      <Text style={styles.title}>{listing.title}</Text>
      <Text style={styles.description}>{listing.description}</Text>
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

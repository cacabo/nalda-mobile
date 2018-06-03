import React from 'react';
import { View, Image, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/previews/preview';

// Import components
import Stars from '../listings/Stars';
import Categories from '../listings/Categories';

const PreviewListing = ({ listing, navigation }) => {
  if (!listing) return null;
  const id = listing._id || listing.contentId;
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
      <Button
        onPress={() => navigation.navigate('Listing', { id })}
        title="View"
      />
    </View>
  );
};

PreviewListing.propTypes = {
  listing: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default PreviewListing;

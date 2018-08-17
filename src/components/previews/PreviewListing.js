import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../styles/previews/preview';

import Stars from '../listings/Stars';
import Categories from '../listings/Categories';

const PreviewListing = ({
  listing: {
    image,
    imagePreview,
    location,
    title,
    rating,
    categories,
    description,
    _id,
    contentId,
  },
  navigation,
}) => {
  const id = _id || contentId;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Listing', { id })} style={styles.previewWrapper}>
      <View style={styles.preview}>
        <Image
          source={{ uri: imagePreview || image }}
          resizeMode="cover"
          style={styles.image}
        />

        {location && location instanceof Object && location.name ? (
          <Text style={styles.location} numberOfLines={1}>
            {location.name}
          </Text>
        ) : null}

        <Text style={styles.title}>
          {title}
        </Text>

        <Stars rating={rating} small />

        <Categories categories={categories} small />

        <Text style={styles.subtitle}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

PreviewListing.propTypes = {
  listing: PropTypes.shape({
    location: PropTypes.shape({
      name: PropTypes.string,
    }),
    image: PropTypes.string,
    imagePreview: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
    categories: PropTypes.object,
    description: PropTypes.string,
    _id: PropTypes.string,
    contentId: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.object.isRequired,
};

export default PreviewListing;

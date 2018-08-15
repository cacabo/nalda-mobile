import React from 'react';
import { TouchableHighlight, View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/previews/preview';

// Import components
import Stars from '../listings/Stars';
import Categories from '../listings/Categories';

const PreviewListing = ({
  listing: {
    image,
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
    <TouchableHighlight onPress={() => navigation.navigate('Listing', { id })}>
      <View style={styles.preview}>
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.title}>
          {title}
        </Text>
        <Stars rating={rating} />
        <Categories categories={categories} />
        <Text style={styles.subtitle}>
          {description}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

PreviewListing.propTypes = {
  listing: PropTypes.shape({
    image: PropTypes.string,
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

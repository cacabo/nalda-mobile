import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';

import styles from '../../styles/listings/amenities';

import amenityMap from './amenityMap';
import images from './amenityImages';

const Amenity = ({ amenity }) => (
  <View style={styles.amenity}>
    {images[amenity] ? (
      <Image
        source={images[amenity]}
        style={styles.image}
      />
    ) : null}
    <Text style={styles.text}>
      {amenityMap[amenity] || amenity}
    </Text>
  </View>
);

Amenity.propTypes = {
  amenity: PropTypes.string.isRequired,
};

export default Amenity;

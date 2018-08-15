import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import textStyles from '../../styles/shared/text';
import styles from '../../styles/listings/amenities';

import Amenity from './Amenity';

const Amenities = ({ amenities }) => {
  const amenitiesArr = Object.keys(amenities).filter(amenity => amenities[amenity]);

  if (!amenitiesArr || !amenitiesArr.length) return null;

  return (
    <View style={styles.section}>
      <Text style={textStyles.subtitle}>
        Amenities:
      </Text>

      {amenitiesArr.map(amenity => (
        <Amenity amenity={amenity} key={amenity} />
      ))}
    </View>
  );
};

Amenities.propTypes = {
  amenities: PropTypes.object.isRequired,
};

export default Amenities;

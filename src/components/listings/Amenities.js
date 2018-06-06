// Import frameworks
import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

// Import styles
import textStyles from '../../styles/shared/text';
import styles from '../../styles/listings/amenities';

// Import text map
import amenityMap from './amenityMap';

// Import amenity images
const outdoorSeating = require('../../images/amenities/outdoorSeating.png');
const formal = require('../../images/amenities/formal.png');
const cashOnly = require('../../images/amenities/cashOnly.png');
const parking = require('../../images/amenities/parking.png');
const reservation = require('../../images/amenities/reservation.png');
const wifi = require('../../images/amenities/wifi.png');
const waiter = require('../../images/amenities/waiter.png');
const wink = require('../../images/amenities/wink.png');

// Construct an object containing all images
const images = {
  outdoorSeating,
  formal,
  cashOnly,
  parking,
  reservation,
  wifi,
  waiter,
  wink,
};

const Amenities = ({ amenities }) => {
  const amenitiesView = Object.keys(amenities).map(amenity => (
    amenities[amenity] ? (
      <View key={amenity} style={styles.amenity}>
        <Image
          source={images[amenity]}
          style={styles.image}
        />
        <Text style={styles.text}>
          {amenityMap[amenity] || amenity}
        </Text>
      </View>
    ) : null
  ));

  // Return nothing if there are no amenities to show
  if (!amenitiesView || !amenitiesView.length) return null;

  return (
    <View style={styles.section}>
      <Text style={textStyles.subtitle}>
        Amenities:
      </Text>
      {amenitiesView}
    </View>
  );
};

Amenities.propTypes = {
  amenities: PropTypes.object.isRequired,
};

export default Amenities;

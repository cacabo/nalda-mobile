import React from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/listings/stars';

// Import stare images
const empty = require('../../images/stars/empty.png');
const half = require('../../images/stars/half.png');
const full = require('../../images/stars/full.png');

const Stars = ({ rating }) => {
  const numFull = parseInt(rating, 10);
  const numHalf = parseInt(rating + 0.5, 10) - numFull;
  const numEmpty = 5 - numFull - numHalf;

  const renderStars = (count, image) => {
    let i;
    const stars = [];
    for (i = 0; i < count; i += 1) {
      const star = (
        <Image
          source={image}
          style={styles.star}
          key={i}
        />
      );
      stars.push(star);
    }
    return stars;
  };

  return (
    <View>
      {renderStars(full, numFull)}
      {renderStars(half, numHalf)}
      {renderStars(empty, numEmpty)}
    </View>
  );
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Stars;

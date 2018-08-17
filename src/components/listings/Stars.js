import React from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/listings/stars';

// Import star images
const empty = require('../../images/stars/empty.png');
const half = require('../../images/stars/half.png');
const full = require('../../images/stars/full.png');

const Stars = ({ rating, small }) => {
  const numFull = parseInt(rating, 10);
  const numHalf = parseInt(rating + 0.5, 10) - numFull;
  const stars = [];
  let i;

  const starStyles = small ? styles.smallStar : styles.star;

  for (i = 0; i < 5; i += 1) {
    let source;
    if (i < numFull) {
      source = full;
    } else if (i < numFull + numHalf) {
      source = half;
    } else {
      source = empty;
    }

    const image = (
      <Image
        source={source}
        style={starStyles}
        key={i}
      />
    );

    stars.push(image);
  }

  return (
    <View style={styles.container}>
      {stars}
    </View>
  );
};

Stars.defaultProps = {
  small: false,
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
  small: PropTypes.bool,
};

export default Stars;

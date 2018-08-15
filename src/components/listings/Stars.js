import React from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/listings/stars';

// Import star images
const empty = require('../../images/stars/empty.png');
const half = require('../../images/stars/half.png');
const full = require('../../images/stars/full.png');

const Stars = ({ rating }) => {
  const numFull = parseInt(rating, 10);
  const numHalf = parseInt(rating + 0.5, 10) - numFull;
  const stars = [];
  let i;

  for (i = 0; i < 5; i += 1) {
    let image;
    if (i < numFull) {
      image = (
        <Image
          source={full}
          style={styles.star}
          key={i}
        />
      );
    } else if (i < numFull + numHalf) {
      image = (
        <Image
          source={half}
          style={styles.star}
          key={i}
        />
      );
    } else {
      image = (
        <Image
          source={empty}
          style={styles.star}
          key={i}
        />
      );
    }

    stars.push(image);
  }

  return (
    <View style={styles.container}>
      {stars}
    </View>
  );
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Stars;

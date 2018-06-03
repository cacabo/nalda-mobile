import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text } from 'react-native';
import styles from '../../styles/shared/author';
import Timestamp from './Timestamp';

// TODO link to author profile?
const Author = ({ author, createdAt, updatedAt }) => {
  if (author) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: author.profilePicture }}
        />
        <View>
          <Text style={styles.text}>
            {author.name}
          </Text>
          <Timestamp
            createdAt={createdAt}
            updatedAt={updatedAt}
            style={styles.timestamp}
          />
        </View>
      </View>
    );
  }

  return null;
};

Author.defaultProps = {
  createdAt: null,
  updatedAt: null,
};

Author.propTypes = {
  createdAt: PropTypes.number,
  updatedAt: PropTypes.number,
  author: PropTypes.object.isRequired,
};

export default Author;

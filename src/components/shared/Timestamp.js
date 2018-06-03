// Import frameworks
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Text } from 'react-native';
import styles from '../../styles/shared/author';

/**
 * Component to render a timestamp with created at and updated at fields
 */
const Timestamp = ({ createdAt, updatedAt }) => {
  // If no props are passed in or only updatedAt passed in, return null
  if (!createdAt) {
    return null;
  }

  // Else, build up the timestamp string
  // Construct the timstamp string
  let timestamp = `Created ${moment(createdAt).fromNow()}.`;

  // Add updated if applicable
  if (createdAt !== updatedAt) {
    timestamp += (` Updated ${moment(updatedAt).fromNow()}.`);
  }

  // Return the timestamp in a paragraph tag
  return (
    <Text style={styles.timestamp}>
      {timestamp}
    </Text>
  );
};

Timestamp.defaultProps = {
  updatedAt: '',
};

Timestamp.propTypes = {
  createdAt: PropTypes.number.isRequired,
  updatedAt: PropTypes.number,
};

export default Timestamp;

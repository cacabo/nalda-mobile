// Import frameworks
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Text } from 'react-native';
import styles from '../../styles/shared/author';

// Component to render a timestamp with created at and updated at fields
const Timestamp = ({ createdAt, updatedAt }) => {
  // If no props are passed in or only updatedAt passed in, return null
  if (!createdAt) {
    return null;
  }

  const createdFromNow = moment(createdAt).fromNow();
  const updatedFromNow = updatedAt ? moment(updatedAt).fromNow() : undefined;

  // Else, build up the timestamp string
  // Construct the timstamp string
  let timestamp = `Created ${createdFromNow}.`;

  // Add updated if applicable
  // For example, instead of saying "Created a month ago, updated a month ago.",
  // simply say "Created a month ago."
  if (updatedFromNow !== createdFromNow) {
    timestamp += (` Updated ${updatedFromNow}.`);
  }

  // Return the timestamp in a paragraph tag
  return (
    <Text style={styles.timestamp}>
      {timestamp}
    </Text>
  );
};

Timestamp.defaultProps = {
  updatedAt: undefined,
};

Timestamp.propTypes = {
  createdAt: PropTypes.number.isRequired,
  updatedAt: PropTypes.number,
};

export default Timestamp;

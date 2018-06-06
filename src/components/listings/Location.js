import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Map from '../shared/Map';
import textStyles from '../../styles/shared/text';

const Location = ({ location }) => {
  const {
    lat,
    lng,
    name,
  } = location;

  return (
    <View>
      <Text style={textStyles.subtitle}>Location:</Text>
      <Text style={textStyles.body}>{name}</Text>
      <Map lat={lat} lng={lng} />
    </View>
  );
};

Location.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};

export default Location;

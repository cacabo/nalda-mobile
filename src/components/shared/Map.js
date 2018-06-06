import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import PropTypes from 'prop-types';
import styles from '../../styles/shared/map';

const Map = ({ lng, lat }) => {
  const region = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: 0.02305,
    longitudeDelta: 0.010525,
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      initialRegion={region}
      style={styles.map}
    >
      <Marker
        coordinate={{
          longitude: lng,
          latitude: lat,
        }}
      />
    </MapView>
  );
};

Map.propTypes = {
  lng: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
};

export default Map;

import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import BodyComponent from './BodyComponent';
import appStyles from '../../styles/app';

const Body = ({ components }) => (
  <View style={appStyles.container}>
    {components.map(component => (
      <BodyComponent
        component={component}
        key={component._id}
      />
    ))}
  </View>
);

Body.propTypes = {
  components: PropTypes.array.isRequired,
};

export default Body;

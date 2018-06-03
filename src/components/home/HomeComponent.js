import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/home/homeComponent';
import Previews from '../previews/Previews';

const HomeComponent = ({ component, navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      { component.title }
    </Text>
    <Text style={styles.subtitle}>
      { component.subtitle }
    </Text>
    <Previews
      content={component.content}
      id={component._id}
      navigation={navigation}
    />
  </View>
);

HomeComponent.defaultProps = {
  component: {},
};

HomeComponent.propTypes = {
  component: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    contentType: PropTypes.string,
  }),
  navigation: PropTypes.object.isRequired,
};

export default HomeComponent;

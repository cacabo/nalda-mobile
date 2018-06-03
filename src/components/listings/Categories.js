import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/listings/categories';

const Categories = ({ categories }) => {
  const elements = [];
  Object.keys(categories).forEach((key) => {
    if (categories[key]) {
      const element = (
        <Text style={styles.category} key={key}>
          {key}
        </Text>
      );
      elements.push(element);
    }
  });
  return (
    <View style={styles.container}>
      {elements}
    </View>
  );
};

Categories.propTypes = {
  categories: PropTypes.object.isRequired,
};

export default Categories;

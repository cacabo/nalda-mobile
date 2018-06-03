import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/listings/categories';
import categoryMap from './categoryMap';

const Categories = ({ categories }) => {
  // Render a category only if it is 'true' in the map
  const elements = [];
  Object.keys(categories).forEach((key) => {
    if (categories[key]) {
      const element = (
        <Text style={styles.category} key={key}>
          {categoryMap[key] || key}
        </Text>
      );
      elements.push(element);
    }
  });

  // Render all o fthe categories from above
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

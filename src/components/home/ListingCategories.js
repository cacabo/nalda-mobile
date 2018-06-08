// Import frameworks
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/home/homeComponent';

// Import json
import categoryMap from '../listings/categoryMap';

/**
 * Render the categories for all listings
 */
const ListingCategories = ({ navigation }) => (
  <View>
    <Text style={styles.title}>
      What are you looking for?
    </Text>
    <Text style={styles.subtitle}>
      See what Nalda has to offer.
    </Text>
    <View style={[styles.container, styles.categories]}>
      {
        Object.keys(categoryMap).map(key => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ListingsCategory', { category: key })}
            style={styles.category}
            key={key}
          >
            <Text style={styles.categoryText}>
              {categoryMap[key] || key}
            </Text>
          </TouchableOpacity>
        ))
      }
    </View>
  </View>
);

ListingCategories.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ListingCategories;

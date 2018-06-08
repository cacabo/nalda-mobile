// Import frameworks
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/home/homeComponent';

// Import json
import categoryMap from '../listings/categoryMap';

/**
 * Render the categories for all listings
 */
const ListingCategories = () => (
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
          <TouchableOpacity style={styles.category} key={key}>
            <Text style={styles.categoryText}>
              {categoryMap[key] || key}
            </Text>
          </TouchableOpacity>
        ))
      }
    </View>
  </View>
);

export default ListingCategories;

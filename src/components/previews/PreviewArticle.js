import React from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../styles/previews/preview';

const PreviewArticle = ({
  article: {
    _id,
    contentId,
    title,
    imagePreview,
    image,
    subtitle,
  },
  navigation,
}) => {
  const id = _id || contentId;

  return (
    <TouchableHighlight onPress={() => navigation.navigate('Article', { id })}>
      <View style={styles.preview}>
        <Image
          source={{ uri: imagePreview || image }}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

PreviewArticle.propTypes = {
  article: PropTypes.shape({
    _id: PropTypes.string,
    contentId: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    imagePreview: PropTypes.string,
    subtitle: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.object.isRequired,
};

export default PreviewArticle;

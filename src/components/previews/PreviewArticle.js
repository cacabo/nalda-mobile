import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

const PreviewArticle = ({ article, navigation }) => {
  const id = article._id || article.contentId;

  return (
    <TouchableHighlight onPress={() => navigation.navigate('Article', { id })}>
      <Text>{article.title}</Text>
    </TouchableHighlight>
  );
};

PreviewArticle.propTypes = {
  article: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default PreviewArticle;

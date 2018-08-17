import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import textStyles from '../../styles/shared/text';

import Previews from '../previews/Previews';

const SearchResultsSection = ({
  content,
  contentType,
  navigation,
}) => {
  if (!content || !content.length) return null;

  let title;

  if (contentType === 'article') title = 'Articles';
  else if (contentType === 'listing') title = 'Listings';
  else if (contentType === 'video') title = 'Videos';
  else if (contentType === 'curator') title = 'Curators';

  if (!title) return null;

  return (
    <View>
      <Text style={[textStyles.title, textStyles.gray]}>{title}</Text>

      <Previews
        id={contentType}
        contentType={contentType}
        content={content}
        navigation={navigation}
      />
    </View>
  );
};

SearchResultsSection.propTypes = {
  content: PropTypes.array.isRequired,
  contentType: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default SearchResultsSection;

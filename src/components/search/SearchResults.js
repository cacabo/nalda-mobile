import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import textStyles from '../../styles/shared/text';

import SearchResultsSection from './SearchResultsSection';

const SearchResults = ({
  listings,
  articles,
  videos,
  curators,
  navigation,
}) => {
  const areResults = () => {
    const results = [
      listings,
      articles,
      videos,
      curators,
    ];

    return results.some(r => r && r.length);
  };

  const renderSearchResults = () => {
    // Map from content types to content to make rendering logic cleaner, DRY
    const map = {
      listing: listings,
      article: articles,
      video: videos,
      curator: curators,
    };

    return Object.keys(map).map(key => (
      <SearchResultsSection
        content={map[key]}
        contentType={key}
        navigation={navigation}
      />
    ));
  };

  if (areResults()) {
    return (
      <View>
        {renderSearchResults()}
      </View>
    );
  }

  return (
    <Text style={textStyles.gray}>Search for activities, restaurants, and more</Text>
  );
};

SearchResults.propTypes = {
  listings: PropTypes.array.isRequired,
  articles: PropTypes.array.isRequired,
  videos: PropTypes.array.isRequired,
  curators: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default SearchResults;

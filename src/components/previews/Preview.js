import React from 'react';
import PropTypes from 'prop-types';
import PreviewListing from './PreviewListing';
import PreviewArticle from './PreviewArticle';
import PreviewVideo from './PreviewVideo';

const Preview = ({ content, contentType, navigation }) => {
  const type = contentType || content.contentType;
  // TODO other checking ?
  if (type === 'listing' || type === 'Listings') {
    return (
      <PreviewListing
        listing={content}
        navigation={navigation}
      />
    );
  } else if (type === 'article' || type === 'Articles') {
    return (
      <PreviewArticle
        article={content}
        navigation={navigation}
      />
    );
  }
  return (
    <PreviewVideo
      video={content}
      navigation={navigation}
    />
  );
};

Preview.defaultProps = {
  contentType: '',
};

Preview.propTypes = {
  content: PropTypes.object.isRequired,
  contentType: PropTypes.string,
  navigation: PropTypes.object.isRequired,
};

export default Preview;

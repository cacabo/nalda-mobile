import React from 'react';
import PropTypes from 'prop-types';

import PreviewListing from './PreviewListing';
import PreviewArticle from './PreviewArticle';
import PreviewVideo from './PreviewVideo';

const Preview = ({ content, contentType, navigation }) => {
  const type = contentType || content.contentType;

  if (!type) return null;

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
  } else if (type === 'video' || type === 'Videos') {
    return (
      <PreviewVideo
        video={content}
        navigation={navigation}
      />
    );
  }

  // TODO curators

  return null;
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

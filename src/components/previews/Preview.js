import React from 'react';
import PropTypes from 'prop-types';
import PreviewListing from './PreviewListing';
import PreviewArticle from './PreviewArticle';
import PreviewVideo from './PreviewVideo';

const Preview = ({ content, contentType }) => {
  const type = contentType || content.contentType;
  // TODO other checking ?
  if (type === 'listing' || type === 'Listings') {
    return (<PreviewListing listing={content} />);
  } else if (type === 'article' || type === 'Articles') {
    return (<PreviewArticle article={content} />);
  }
  return (<PreviewVideo video={content} />);
};

Preview.defaultProps = {
  contentType: '',
};

Preview.propTypes = {
  content: PropTypes.object.isRequired,
  contentType: PropTypes.string,
};

export default Preview;

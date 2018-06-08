import React from 'react';
import PropTypes from 'prop-types';
import Preview from './Preview';

const Previews = ({
  content,
  id,
  navigation,
  contentType,
}) => (
  content.map((c, index) => (
    <Preview
      content={c}
      key={`${id}-${c.contentId || c._id}-${index}`}
      navigation={navigation}
      contentType={contentType}
    />
  ))
);

Previews.defaultProps = {
  content: [],
  id: '',
  contentType: null,
};

Previews.propTypes = {
  id: PropTypes.string,
  content: PropTypes.array,
  navigation: PropTypes.object.isRequired,
  contentType: PropTypes.oneOf(['listing', 'video', 'article']),
};

export default Previews;

import React from 'react';
import PropTypes from 'prop-types';
import Preview from './Preview';

const Previews = ({ content, id, navigation }) => (
  content.map((c, index) => (
    <Preview
      content={c}
      key={`${id}-${c.contentId}-${index}`}
      navigation={navigation}
    />
  ))
);

Previews.defaultProps = {
  content: [],
  id: '',
};

Previews.propTypes = {
  id: PropTypes.string,
  content: PropTypes.array,
  navigation: PropTypes.object.isRequired,
};

export default Previews;

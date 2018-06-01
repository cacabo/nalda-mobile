import React from 'react';
import PropTypes from 'prop-types';
import Preview from './Preview';

const Previews = ({ content, id }) => (
  content.map((c, index) => (
    <Preview content={c} key={`${id}-${c.contentId}-${index}`} />
  ))
);

Previews.defaultProps = {
  content: [],
  id: '',
};

Previews.propTypes = {
  id: PropTypes.string,
  content: PropTypes.array,
};

export default Previews;

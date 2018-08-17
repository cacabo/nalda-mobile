import React from 'react';
import PropTypes from 'prop-types';

import PreviewPair from './PreviewPair';

const Previews = ({
  content,
  id,
  navigation,
  contentType,
}) => {
  // Split the passed in content array into pairs.
  // For example, given [1, 2, 3, 4], we get [[1, 2], [3, 4]]
  const contentPairs = content.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }

    return result;
  }, []);

  // Ensure each pair has 2 items in it so that each takes up 1/2 the width of
  // the screen. Thus, given [1, 2, 3], we get [[1, 2], [3, null]]
  if (contentPairs[contentPairs.length - 1].length === 1) {
    contentPairs[contentPairs.length - 1].push(null);
  }

  return (
    contentPairs.map((pair, index) => (
      <PreviewPair
        id={id}
        pair={pair}
        key={`${index}-${id}`}
        navigation={navigation}
        contentType={contentType}
      />
    ))
  );
};

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

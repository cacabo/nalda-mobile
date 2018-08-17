import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../styles/previews/preview';

import Preview from './Preview';

const PreviewPair = ({
  pair,
  id,
  navigation,
  contentType,
}) => {
  const getID = (content) => {
    if (content && (content._id || content.contentId)) {
      return content._id || content.contentID;
    }

    return 'undefined';
  };

  const getContainerID = () => (
    `container-${id}-${getID(pair[0])}-${getID(pair[1])}`
  );

  const getFirstPreview = () => (
    <Preview
      content={pair[0]}
      key={`${id}-${getID(pair[0])}-0`}
      navigation={navigation}
      contentType={contentType}
    />
  );

  const getSecondPreview = () => {
    if (pair[1]) {
      return (
        <Preview
          content={pair[1]}
          key={`${id}-${getID(pair[1])}-1`}
          navigation={navigation}
          contentType={contentType}
        />
      );
    }

    return (
      <View style={styles.previewWrapper} key={`${id}-null-1`} />
    );
  };

  return (
    <View style={styles.previewsContainer} key={getContainerID()}>
      {getFirstPreview()}
      <View style={styles.spacer} />
      {getSecondPreview()}
    </View>
  );
};

PreviewPair.defaultProps = {
  id: '',
  contentType: '',
};

PreviewPair.propTypes = {
  pair: PropTypes.array.isRequired,
  id: PropTypes.string,
  navigation: PropTypes.object.isRequired,
  contentType: PropTypes.string,
};

export default PreviewPair;

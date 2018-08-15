import React from 'react';
import PropTypes from 'prop-types';

import HeaderComponent from './HeaderComponent';
import ImageComponent from './ImageComponent';
import TextComponent from './TextComponent';
import QuoteComponent from './QuoteComponent';

const BodyComponent = ({
  component: {
    componentType,
    body,
  },
}) => {
  if (componentType === 'text') {
    return (<TextComponent body={body} />);
  } else if (componentType === 'quote') {
    return (<QuoteComponent body={body} />);
  } else if (componentType === 'image') {
    return (<ImageComponent body={body} />);
  } else if (componentType === 'header') {
    return (<HeaderComponent body={body} />);
  }

  return null;
};

BodyComponent.propTypes = {
  component: PropTypes.shape({
    componentType: PropTypes.string.isRequired,
    body: PropTypes.string,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default BodyComponent;

import React from 'react';

import BodyComponent from './BodyComponent';

const Body = ({ components }) => (
  components.map(component => (
    <BodyComponent
      component={component}
      key={component._id}
    />
  ))
);

export default Body;

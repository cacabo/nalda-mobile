import React from 'react';
import HomeComponent from './HomeComponent';

const HomeComponents = ({ components }) => (
  components.map(c => (
    <HomeComponent component={c} key={c._id} />
  ))
);

export default HomeComponents;

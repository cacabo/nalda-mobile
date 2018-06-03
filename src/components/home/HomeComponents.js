import React from 'react';
import HomeComponent from './HomeComponent';

const HomeComponents = ({ components, navigation }) => (
  components.map(c => (
    <HomeComponent
      component={c}
      key={c._id}
      navigation={navigation}
    />
  ))
);

export default HomeComponents;

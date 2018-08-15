import React, { Component } from 'react';
import { Text } from 'react-native';

import Loading from '../shared/Loading';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      article: {},
    };
  }

  componentDidMount() {
    // TODO
  }

  render() {
    if (this.state.loading) return (<Loading />);

    // TODO render the article

    return (
      <Text>This is an article</Text>
    );
  }
}

export default Article;

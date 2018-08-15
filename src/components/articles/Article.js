import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';

import { articlePath } from '../../api';

import styles from '../../styles/articles/article';

import Loading from '../shared/Loading';
import Overview from './Overview';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.navigation.state.params;

    axios.get(articlePath(id))
      .then((res) => {
        if (res.data.article && res.data.author) {
          this.setState({
            loading: false,
            article: res.data.article,
            author: res.data.author,
          });
        } else {
          this.setState({
            loading: false,
            error: res.data.error || 'Something went wrong',
          });
        }
      })
      .catch((err) => {
        this.setState({
          loading: false,
          error: err.message,
        });
      });
  }

  render() {
    if (this.state.loading) return (<Loading />);

    return (
      <ScrollView>
        <Overview
          article={this.state.article}
          error={this.state.error}
          author={this.state.author}
        />

        <Image
          style={styles.image}
          source={{ uri: this.state.article.image }}
        />
      </ScrollView>
    );
  }
}

Article.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Article;

import React, { Component } from 'react';
import { View, Button, Image, ScrollView } from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';

import { articlePath } from '../../api';

import appStyles from '../../styles/app';
import styles from '../../styles/articles/article';

import Loading from '../shared/Loading';
import Overview from './Overview';
import Body from './Body';

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

        <Body components={this.state.article.body} />

        <View style={appStyles.container}>
          <Button
            onPress={() => this.props.navigation.navigate('Articles')}
            title="Back to all Articles"
          />
        </View>
      </ScrollView>
    );
  }
}

Article.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Article;

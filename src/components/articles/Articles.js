import React, { Component } from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';

import appStyles from '../../styles/app';
import textStyles from '../../styles/shared/text';

import { articlesPath } from '../../api';

import Loading from '../shared/Loading';
import Error from '../shared/Error';
import Previews from '../previews/Previews';

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      articles: [],
    };
  }

  componentDidMount() {
    axios.get(articlesPath)
      .then((res) => {
        if (res.data.articles && res.data.articles.length) {
          this.setState({
            loading: false,
            articles: res.data.articles,
          });

          return;
        }

        this.setState({
          loading: false,
          error: 'Oops! Something went wrong.',
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          error: err.message,
        });
      });
  }

  render() {
    if (this.state.loading) {
      return (<Loading />);
    }

    return (
      <ScrollView>
        <View style={appStyles.container}>
          <Error error={this.state.error} />

          <Text style={[textStyles.title, textStyles.gray]}>
            Curator Articles
          </Text>

          <Previews
            content={this.state.articles}
            navigation={this.props.navigation}
            contentType="article"
          />
        </View>

        <View style={appStyles.container}>
          <Button
            onPress={() => this.props.navigation.navigate('Home')}
            title="Back to Home"
          />
        </View>
      </ScrollView>
    );
  }
}

Articles.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Articles;

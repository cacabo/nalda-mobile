import React, { Component } from 'react';
import { ScrollView, View, TextInput } from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';

import { searchPath } from '../../api';

import appStyles from '../../styles/app';
import styles from '../../styles/search/search';

import Loading from '../shared/Loading';
import Error from '../shared/Error';
import SearchResults from './SearchResults';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      text: '',
      articles: [],
      listings: [],
      videos: [],
      curators: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.clearResults = this.clearResults.bind(this);
  }

  clearResults() {
    this.setState({
      loading: false,
      text: '',
      articles: [],
      listings: [],
      videos: [],
      curators: [],
    });
  }

  handleChange(text) {
    this.setState({
      text,
      loading: true,
    });

    if (text && text.length) {
      axios.post(searchPath, { search: this.state.text })
        .then((res) => {
          if (res.data.success) {
            this.setState({
              loading: false,
              articles: res.data.data.articles || [],
              listings: res.data.data.listings || [],
              videos: res.data.data.videos || [],
              curators: res.data.data.curators || [],
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
            error: err.message || 'Something went wrong.',
          });
        });
    } else {
      this.clearResults();
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={appStyles.container}>
          <TextInput
            style={styles.input}
            value={this.state.text}
            onChangeText={this.handleChange}
          />

          <Error error={this.state.error} />

          {this.state.loading ? (
            <Loading />
          ) : (
            <SearchResults
              articles={this.state.articles}
              curators={this.state.curators}
              videos={this.state.videos}
              listings={this.state.listings}
              navigation={this.props.navigation}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}

Search.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Search;

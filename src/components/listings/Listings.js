import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';

import appStyles from '../../styles/app';
import textStyles from '../../styles/shared/text';

import { listingsPath } from '../../api';

import Loading from '../shared/Loading';
import Error from '../shared/Error';
import Previews from '../previews/Previews';

class Listings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      listings: [],
    };
  }

  componentDidMount() {
    axios.get(listingsPath)
      .then((res) => {
        if (res.data.listings && res.data.listings.length) {
          this.setState({
            loading: false,
            listings: res.data.listings,
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

          <Text style={textStyles.title}>
            Listings
          </Text>

          <Previews
            content={this.state.listings}
            navigation={this.props.navigation}
            contentType="listing"
          />
        </View>
      </ScrollView>
    );
  }
}

Listings.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Listings;

import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import axios from 'axios';
import { listingPath } from '../../api';
import appStyles from '../../styles/app';

// Import components
import Loading from '../shared/Loading';
import Error from '../shared/Error';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: '',
      // TODO
    };
  }

  componentDidMount() {
    // TODO pass along the listing ID
    axios.get(listingPath('128394'))
      .then((res) => {
        if (res.data.success) {
          this.setState({
            loading: false,
            // TODO
          });
        } else {
          this.setState({
            loading: false,
            error: res.data.error,
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
    if (this.state.loading) {
      return (<Loading />);
    }

    return (
      <ScrollView>
        <View style={appStyles.container}>
          <Error error={this.state.error} />
          <Text>
            This is a listing
          </Text>
        </View>
      </ScrollView>
    );
  }
}

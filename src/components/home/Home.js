import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { homePath } from '../../api';
import Error from '../shared/Error';
import styles from '../../styles/index';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      banner: {},
      components: {},
    };
  }

  componentDidMount() {
    axios.get(homePath)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            loading: false,
            banner: res.data.banner,
            components: res.data.components,
          });
        } else {
          this.setState({
            loading: false,
            error: res.data.error,
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text>This is the homepage</Text>
        <Error error={this.state.error} />
      </View>
    );
  }
}

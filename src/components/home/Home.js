import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import axios from 'axios';

// Import routes
import { homePath } from '../../api';

// Import styles
import styles from '../../styles/app';

// Import components
import Error from '../shared/Error';
import HomeComponents from './HomeComponents';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      // banner: {},
      components: {},
    };
  }

  componentDidMount() {
    axios.get(homePath)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            loading: false,
            // banner: res.data.banner,
            components: res.data.components,
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
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          <HomeComponents components={this.state.components} />
          <Error error={this.state.error} />
        </View>
      </ScrollView>
    );
  }
}

import React, { Component } from 'react';
import { Image, ScrollView, View, Text } from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';
import { listingPath } from '../../api';
import appStyles from '../../styles/app';
import styles from '../../styles/listings/listing';

// Import components
import Loading from '../shared/Loading';
import Error from '../shared/Error';

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.navigation.state.params;
    axios.get(listingPath(id))
      .then((res) => {
        if (res.data.success) {
          this.setState({
            loading: false,
            listing: res.data.data,
            author: res.data.author,
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
        <Image
          style={styles.image}
          source={{ uri: this.state.listing.image }}
        />
        <View style={appStyles.container}>
          <Error error={this.state.error} />
          <Text style={styles.title}>
            {this.state.listing.title}
          </Text>
          <Text style={styles.description}>
            {this.state.listing.description}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

Listing.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Listing;

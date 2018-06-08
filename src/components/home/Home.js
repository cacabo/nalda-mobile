import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';

// Import routes
import { homePath } from '../../api';

// Import styles
import styles from '../../styles/app';

// Import components
import Error from '../shared/Error';
import Loading from '../shared/Loading';
import HomeComponents from './HomeComponents';
import Banner from './Banner';
import ListingCategories from './ListingCategories';

class Home extends Component {
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
        <Loading />
      );
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          <Error error={this.state.error} />
        </View>
        <Banner
          banner={this.state.banner}
          navigation={this.props.navigation}
        />
        <View style={styles.container}>
          <ListingCategories />
          <HomeComponents
            components={this.state.components}
            navigation={this.props.navigation}
          />
        </View>
      </ScrollView>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
